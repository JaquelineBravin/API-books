import React from "react";
import { View, Text } from "react-native";

const CategoriesScreen: React.FC = () => {
  return (
    <View className="flex-1 bg-gray-800">
      <Text className="text-2xl text-zinc-400 ml-5">Categorias</Text>
      <View>
        <Text className="text-xl text-zinc-400 ml-5">Fantasia</Text>
      </View>
      <View>
        <Text className="text-xl text-zinc-400 ml-5">Romance</Text>
      </View>
      <View>
        <Text className="text-xl text-zinc-400 ml-5">Terror</Text>
      </View>
      <View>
        <Text className="text-xl text-zinc-400 ml-5">Clássico</Text>
      </View>
      <View>
        <Text className="text-xl text-zinc-400 ml-5">Infantil</Text>
      </View>
    </View>
  );
};

export default CategoriesScreen;
