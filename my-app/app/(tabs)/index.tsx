import { Text, View, Image, ScrollView, ActivityIndicator, FlatList } from "react-native";
import "../global.css";
import { images } from "@/constants/images";
import { icons } from "@/constants/icons";
import Search from "@/components/Search";
import { useRouter } from 'expo-router';
import useFetch from "@/services/useFetch";
import { fetchMovies } from "@/services/api";

export default function Index() {
  const router = useRouter();

  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError
  } = useFetch(() => fetchMovies({ query: '' }));

  return (
    <View className="flex-1 bg-primary relative">
      <Image source={images.bg} className="absolute w-full h-full z-0" resizeMode="cover" />
      <ScrollView
        className="absolute top-10 w-full z-10"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ minHeight: "100%", paddingBottom: 10 }}
      >
        <View className="w-full z-10 items-center">
          <Image source={icons.logo} className="w-12 h-10" />
        </View>

        {moviesLoading ? (
          <ActivityIndicator
            size="large"
            color="#0000ff"
            className="mt-10 self-center"
          />
        ) : moviesError ? (
          <Text>Error: {moviesError.message}</Text>
        ) : (
          <View className="flex-1 mt-5">
            <Search
              onPress={() => router.push("/search")}
              placeholder="Search for a movie"
            />

            <Text className="text-lg text-white font-bold mt-5 ml-5 mb-3">Latest Movies</Text>

            <FlatList
              data={movies}
              renderItem={({ item }) => (
                <Text className="text-white text-sm ">{item.title}
                </Text>
              )}
              keyExtractor={(item) => item.id.toString()}
              numColumns={3}
              columnWrapperStyle={{
                justifyContent:'flex-start',
                gap:20,
                padding:5,
                marginBottom:10
              }}
              className="mt-2 pb-32"
              scrollEnabled={false}

            />
          </View>
        )}
      </ScrollView>
    </View>
  );
}
