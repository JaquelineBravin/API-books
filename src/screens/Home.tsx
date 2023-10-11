import { View, Text, TextInput, Image, SafeAreaView } from "react-native";
import { Carrousel } from "./Carrousel";

const Home = () => {
  return (
    <SafeAreaView className="flex-1 justify-center">
      <View className="flex-1 bg-gray-800">
        <Text className="text-zinc-400 text-lg ml-6 mt-10 font-extrabold">
          O que gostaria de ler?
        </Text>
        <TextInput
          className="h-10 m-4 p-3 bg-zinc-700 rounded-2xl text-white text-sm font-normal"
          placeholder="Pesquisar"
        />


      </View>

      <View className="absolute inset-y-0 top-32 flex items-center">
        <Carrousel />
      </View>
    </SafeAreaView>
  );
};

export default Home;
