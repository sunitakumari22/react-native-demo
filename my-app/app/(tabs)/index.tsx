import { View, Text, Image, ActivityIndicator, FlatList } from 'react-native';
import { useRouter } from 'expo-router';
import { images } from '@/constants/images';
import { icons } from '@/constants/icons';
import Search from '@/components/Search';
import useFetch from '@/services/useFetch';
import { fetchMovies } from '@/services/api';
import MovieCard from '@/components/MovieCard';

export default function Index() {
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

      <View style={{ flex: 1, marginTop: 40, zIndex: 10, paddingHorizontal: 10 }}>
        <View style={{ alignItems: 'center', marginBottom: 10 }}>
          <Image source={icons.logo} style={{ width: 48, height: 40 }} />
        </View>

        {moviesLoading ? (
          <ActivityIndicator size="large" color="#A259FF" style={{ marginTop: 30 }} />
        ) : moviesError ? (
          <Text style={{ color: 'red', textAlign: 'center', marginTop: 20 }}>
            Error: {moviesError.message}
          </Text>
        ) : (
          <View style={{ flex: 1 }}>
            <Search
              onPress={() => router.push('/search')}
              placeholder="Search for a movie"
            />

            <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold', marginTop: 20, marginBottom: 10 }}>
              Latest Movies
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
          </View>
        )}
      </View>
    </View>
  );
}
