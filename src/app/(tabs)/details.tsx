import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
// import {
// 	getCurrentPositionAsync,
// 	requestForegroundPermissionsAsync,
// 	LocationObject,

// } from 'expo-location';
// import { useNavigation } from '@react-navigation/native';

const DetailsScreen: React.FC = () => {
	const params = useLocalSearchParams();
	// const navigation = useNavigation();

	// Geolocalização
	// Pesquise pela latitude e longitude no Google Maps para confirmar a localização do usuário
	// Exemplo: 37.4226711, -122.0849872

	// const [location, setLocation] = useState<LocationObject | null>(null);

	// async function requestLocationPermissions() {
	// 	const { granted } = await requestForegroundPermissionsAsync();

	// 	if (granted) {
	// 		const currentPosition = await getCurrentPositionAsync();
	// 		setLocation(currentPosition);

	// 		// console.log('LOCALIZAÇÃO ATUAL => ', currentPosition.coords);
	// 		const locatraduct = currentPosition.coords;
	// 		console.log('LOCALIZAÇÃO ATUAL => ', locatraduct);
	// 	}
	// }

	// useEffect(() => {
	// 	requestLocationPermissions();
	// }, []);

	return (
		<View className="flex-1 items-center bg-gray-800">
			<Text className="text-lg text-white">Detalhes</Text>
			<View>
				<Text className="text-sm">Detalhes</Text>
				<Text>Id: {params.id}</Text>
				<Text>Title: {params.title}</Text>
				<Text>linguagem: {params.laguage}</Text>
				<Text>Numero de Downloads: {params.NmrDown}</Text>
				{/* <Text className='text-white text-2xl'>localização: {location?.coords.altitude}</Text> */}
			</View>
		</View>
	);
};

export default DetailsScreen;

// /*
// {"accuracy":,
// "altitude": ,
//  "altitudeAccuracy":,
//  "heading": ,
//  "latitude": ,
//  "longitude":,
//  "speed": }*/