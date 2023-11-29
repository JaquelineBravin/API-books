import React from 'react';
import { View, Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

const DetailsScreen: React.FC = () => {
	const params = useLocalSearchParams();

	return (
		<View className="flex-1 items-center bg-gray-800">
			<Text className="text-lg text-white">Detalhes</Text>
			<View>
				<Text className="text-sm">Detalhes</Text>
				<Text>Id: {params.id}</Text>
				<Text>Title: {params.title}</Text>
				<Text>linguagem: {params.laguage}</Text>
				<Text>Numero de Downloads: {params.NmrDown}</Text>
			</View>
		</View>
	);
};
export default DetailsScreen;
