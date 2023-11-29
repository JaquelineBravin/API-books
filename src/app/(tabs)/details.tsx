import React from 'react';
import { View, Text, Image } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

const DetailsScreen: React.FC = () => {
	const params = useLocalSearchParams();
	const urlImage = params.format?.toString();
	// console.log(urlImage);
	return (
		<View className="flex container	w-full h-full items-center bg-gray-800">
			<Text className="text-xl py-5 text-white">Detalhes</Text>
			<View className='flex '>
				<Image
					source={{ uri: urlImage }}
					className="flex w-screen relative h-60 shrink-0 rounded-b-2xl"
				/>
				<Image
					source={{ uri: urlImage }}
					className="flex w-20 h-32 bg-contain bottom-20 scale-125 rounded-2xl left-10 shrink-0  "
				/>
				<View className='bottom-16 left-2'>
					<View className='py-3'>
						<Text className="font-normal text-xl text-white">{params.title}</Text>
						<Text className="font-normal  text-xl text-gray-500">Título</Text>
					</View>
					<View className='py-3'>
						<Text className="font-normal text-xl text-white" >{params.laguage}</Text>
						<Text className="font-normal text-xl text-gray-500" >Linguagem</Text>
					</View>
					<View className='py-3'>
						<Text className="font-normal text-xl text-white">{params.NmrDown}</Text>
						<Text className="font-normal text-xl text-gray-500">Numero de Downloads</Text>
					</View>
				</View>
			</View>
		</View>
	);
};
export default DetailsScreen;
