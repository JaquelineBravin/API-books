import React from "react";
import { View, Text } from "react-native";

export function Categories() {
  return (
    <View className="flex-1 items-center bg-slate-600">
      <Text className="text-lg text-white">Categorias</Text>
      <View>
        <Text className="text-sm">Fantasia</Text>
      </View>
    </View>
  );
}
