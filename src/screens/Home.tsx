import React from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
  SafeAreaView,
} from "react-native";

const Home = () => {
  const bookCovers = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhUUs97D0_PuByvHgDbEOkwPlMk0lnrJ-dl0S7bnk&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhUUs97D0_PuByvHgDbEOkwPlMk0lnrJ-dl0S7bnk&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhUUs97D0_PuByvHgDbEOkwPlMk0lnrJ-dl0S7bnk&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhUUs97D0_PuByvHgDbEOkwPlMk0lnrJ-dl0S7bnk&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhUUs97D0_PuByvHgDbEOkwPlMk0lnrJ-dl0S7bnk&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhUUs97D0_PuByvHgDbEOkwPlMk0lnrJ-dl0S7bnk&s",
  ];

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
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ flexDirection: "row", marginTop: 10, paddingLeft: 10 }}
        >
          {bookCovers.map((coverUrl, index) => (
            <Image
              key={index}
              source={{ uri: coverUrl }}
              style={{ width: 100, height: 150, marginRight: 10 }}
            />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Home;
