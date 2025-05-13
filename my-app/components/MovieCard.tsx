import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Link } from 'expo-router';

type Movie = {
  id: number;
  poster_path: string | null;
  title: string;
  vote_average: number;
  release_date: string;
};

const MovieCard = ({ id, poster_path, title, vote_average, release_date }: Movie) => {
  return (
    <Link href={`/movie/${id}`} asChild>
      <TouchableOpacity style={{ width: '30%', marginVertical: 8 }}>
        <Image
          source={{
            uri: poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : 'https://placehold.co/300x450/1a1a1a/ffffff.png?text=No+Image',
          }}
          style={{ width: '100%', aspectRatio: 2 / 3, borderRadius: 10 }}
          resizeMode="cover"
        />
        <View style={{ paddingTop: 4 }}>
          <Text style={{ color: 'white', fontSize: 12, fontWeight: '600' }} numberOfLines={1}>
            {title}
          </Text>
          <Text style={{ color: '#ccc', fontSize: 10 }}>
            ⭐ {vote_average} • {release_date?.slice(0, 4)}
          </Text>
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default MovieCard;
