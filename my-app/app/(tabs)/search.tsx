import { View, Text, Image, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { images } from '@/constants/images';
import { useRouter } from 'expo-router';
import useFetch from '@/services/useFetch';
import { fetchMovies } from '@/services/api';
import MovieCard from '@/components/MovieCard';
import { icons } from '@/constants/icons';
import Search from '@/components/Search';

const search = () => {
  const router = useRouter();
  const [inputText, setInputText] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const {
    data: movies,
    loading,
    error,
  } = useFetch(() => fetchMovies({ query: searchQuery }));

  const handleSearch = () => {
    setSearchQuery(inputText);
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#0D0C1D', position: 'relative' }}>
      <Image
        source={images.bg}
        style={{ position: 'absolute', width: '100%', height: '100%', zIndex: 0 }}
        resizeMode="cover"
      />

      <FlatList
        data={movies}
        renderItem={({ item }) => <MovieCard {...item} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
        columnWrapperStyle={{ justifyContent: 'space-between', paddingHorizontal: 10 }}
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <>
            <View style={{ alignItems: 'center', marginTop: 20 }}>
              <Image source={icons.logo} style={{ width: 48, height: 40 }} />
            </View>
            <View style={{ paddingHorizontal: 20, marginTop: 10, flexDirection: 'row', alignItems: 'center' }}>
              <Search
                placeholder="Search for movies..."
                value={inputText}
                onChangeText={(text: string) => setInputText(text)}
              />
              <TouchableOpacity onPress={handleSearch} style={{ marginLeft: 10 }}>
                <Image source={icons.search} style={{ width: 24, height: 24, tintColor: 'white' }} />
              </TouchableOpacity>
            </View>

            {loading && (
              <ActivityIndicator size="large" color="#0000ff" style={{ marginVertical: 16 }} />
            )}

            {error && (
              <Text style={{ color: 'red', paddingHorizontal: 20, marginVertical: 10 }}>
                Error: {error.message}
              </Text>
            )}

            {!loading && !error && searchQuery.trim() && movies?.length > 0 && (
              <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold', marginTop: 10, marginLeft: 10 }}>
                Search Results for <Text style={{ color: '#FACC15' }}>{searchQuery}</Text>
              </Text>
            )}
          </>
        }
      />
    </View>
  );
};

export default search;
