import { View, Text,Image,FlatList } from 'react-native'
import React from 'react'
import { images } from '@/constants/images'
import { useRouter } from 'expo-router';
import useFetch from '@/services/useFetch';
import { fetchMovies } from '@/services/api';
import MovieCard from '@/components/MovieCard';
import { icons } from '@/constants/icons';
import Search from '@/components/Search';

const search = () => {
   const router = useRouter();

  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
  } = useFetch(() => fetchMovies({ query: '' }));
  
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
      <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
        <Search placeholder="Search for movies..." />
      </View>
    </>
  }
/>
    </View>
  )
}

export default search