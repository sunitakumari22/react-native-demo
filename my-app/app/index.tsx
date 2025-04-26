import { Text, View } from "react-native";
import "./global.css"
import { Link } from "expo-router";

export default function Index() {
  return (
    <View className=" flex-1 justify-center items-center text-center">
      
      <Text className="text-center text-5xl text-dark-500 font-bold">Welcome Siyaaa!</Text>
       <Link href="/onboarding">onboarding</Link>
       <Link href={{ pathname: "/movie/[id]", params: { id: "avangers" } }}>
  avangers
</Link>

    </View>
  );
}
