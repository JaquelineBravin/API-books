import React from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
  SafeAreaView,
} from "react-native";
import ScrollViewHorizontal from "../components/ScrollViewHorizontal";
import TabRoutesLayout from "./_layout";

const HomeScreen: React.FC = () => {
  return (
    <SafeAreaView className="flex-1 justify-center">
      <View className="flex-1 bg-gray-800">
        <Text className="text-zinc-400 text-lg ml-6 mt-10 font-semibold">
          O que gostaria de ler?
        </Text>
        <TextInput
          className="h-10 m-3 p-3 bg-zinc-700 rounded-2xl text-neutral-500 text-sm font-normal"
          placeholder="Pesquisar"
        />
        <ScrollViewHorizontal />
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;




