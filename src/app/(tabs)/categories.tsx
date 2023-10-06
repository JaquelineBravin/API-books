import React from "react";
import { View, Text } from "react-native";

  const CategoriesScreen: React.FC = () => {
  return (
    <View className="flex-1 items-center bg-gray-800">
      <Text className="text-lg text-white">Categorias</Text>
      <View>
        <Text className="text-sm">Fantasia</Text>
      </View>
    </View>
  );
}

export default CategoriesScreen;
