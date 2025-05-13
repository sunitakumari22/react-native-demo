import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { fetchMovieDetails } from '@/services/api';
import { images } from '@/constants/images';
import { icons } from '@/constants/icons';

const MovieDetails = () => {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const [movie, setMovie] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const getDetails = async () => {
      try {
        const data = await fetchMovieDetails(id as string);
        setMovie(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to load movie'));
      } finally {
        setLoading(false);
      }
    };

    getDetails();
  }, [id]);

  if (loading) {
    return <ActivityIndicator size="large" color="#A259FF" style={{ marginTop: 40 }} />;
  }

  if (error || !movie) {
    return <Text style={{ color: 'red', marginTop: 40, textAlign: 'center' }}>{error?.message || 'Movie not found'}</Text>;
  }

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#0D0C1D' }}>
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingTop: 20,
        paddingBottom: 16,
        backgroundColor: '#0D0C1D',
        zIndex: 10,
      }}>
        <TouchableOpacity onPress={() => router.back()} style={{ padding: 8 }}>
          <Image
            source={icons.back} 
            style={{ width: 24, height: 24, tintColor: '#E879F9' }}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <Image
          source={icons.logo}
          style={{ width: 48, height: 40 }}
          resizeMode="contain"
        />
        <View style={{ width: 24 }} />
      </View>
      <Image
        source={{
          uri: movie.poster_path
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : 'https://placehold.co/300x450/1a1a1a/ffffff.png?text=No+Image',
        }}
        style={{ width: '100%', height: 500 }}
        resizeMode="cover"
      />
      <View style={{ padding: 16 }}>
        <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>{movie.title}</Text>
        <Text style={{ color: '#ccc', fontSize: 14, marginTop: 4 }}>
          ⭐ {movie.vote_average} • {movie.release_date?.slice(0, 4)}
        </Text>

        <Text style={{ color: 'white', fontSize: 16, marginTop: 16 }}>{movie.overview}</Text>

        <Text style={{ color: '#ccc', marginTop: 20 }}>
          Genres: {movie.genres?.map((g: any) => g.name).join(', ') || 'N/A'}
        </Text>
        <Text style={{ color: '#ccc' }}>
          Runtime: {movie.runtime ? `${movie.runtime} minutes` : 'N/A'}
        </Text>
        <Text style={{ color: '#ccc' }}>
          Language: {movie.original_language?.toUpperCase()}
        </Text>
      </View>
    </ScrollView>
  );
};

export default MovieDetails;
