import { Text, View, Image, ScrollView } from "react-native";
import "../global.css";
import { Link } from "expo-router";
import { images } from "@/constants/images";
import { icons } from "@/constants/icons";
import Search from "@/components/Search";



export default function Index() {
  return (
    <View className="flex-1 bg-primary relative">
      <Image source={images.bg} className="absolute w-full h-full z-0" resizeMode="cover" />
      <ScrollView className="absolute top-10 w-full items-center z-10" showsVerticalScrollIndicator={false} contentContainerStyle={{minHeight:"100%", paddingBottom:10}} >
      <Image source={icons.logo} className="w-12 h-10" />
       <View className="flex-1 mt-5">
        <Search/>
       </View>
      </ScrollView>
    </View>
  );
}

