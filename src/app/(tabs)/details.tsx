import React from "react";
import { View, Text } from "react-native";

const DetailsScreen: React.FC = () => {
    return (
        <View className="flex-1 items-center bg-gray-800">
            <Text className="text-lg text-white">Detalhes</Text>
            <View>
                <Text className="text-sm">Detalhes</Text>
            </View>
        </View>
    );
}	

export default DetailsScreen;