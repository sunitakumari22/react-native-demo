import { View, Text, Image, FlatList, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import { images } from '@/constants/images';
import { useRouter } from 'expo-router';
import { fetchMovies } from '@/services/api';
import MovieCard from '@/components/MovieCard';
import { icons } from '@/constants/icons';
import Search from '@/components/Search';

type Movie = {
  id: number;
  poster_path: string | null;
  title: string;
  vote_average: number;
  release_date: string;
};

const SearchScreen = () => {
  const router = useRouter();
  const [inputText, setInputText] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  const handleSearch = () => {
    setSearchQuery(inputText);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchMovies({ query: searchQuery });
        setMovies(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [searchQuery]);

  return (
    <View style={{ flex: 1, backgroundColor: '#0D0C1D', position: 'relative' }}>
      <Image
        source={images.bg}
        style={{ position: 'absolute', width: '100%', height: '100%', zIndex: 0 }}
        resizeMode="cover"
      />

      <View style={{ flex: 1, marginTop: 40, zIndex: 10, paddingHorizontal: 10 }}>
        <View style={{ alignItems: 'center', marginBottom: 10 }}>
          <Image source={icons.logo} style={{ width: 48, height: 40 }} />
        </View>

        <Search
          onPress={handleSearch}
          placeholder="Search for a movie"
          value={inputText}
          onChangeText={(text) => setInputText(text)}
        />

        {loading ? (
          <ActivityIndicator size="large" color="#A259FF" style={{ marginTop: 30 }} />
        ) : error ? (
          <Text style={{ color: 'red', textAlign: 'center', marginTop: 20 }}>
            Error: {error.message}
          </Text>
        ) : (
          <>
            <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold', marginTop: 20, marginBottom: 10 }}>
              {searchQuery ? `Results for "${searchQuery}"` : 'Latest Movies'}
            </Text>

            <FlatList
              data={movies}
              renderItem={({ item }) => <MovieCard {...item} />}
              keyExtractor={(item) => item.id.toString()}
              numColumns={3}
              columnWrapperStyle={{ justifyContent: 'space-between' }}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ paddingBottom: 100 }}
            />
          </>
        )}
      </View>
    </View>
  );
};

export default SearchScreen;
