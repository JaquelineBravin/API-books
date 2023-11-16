import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import {
	getCurrentPositionAsync,
	requestForegroundPermissionsAsync,
	LocationObject
} from 'expo-location';

const DetailsScreen: React.FC = () => {
	// Geolocalização
	// Pesquise pela latitude e longitude no Google Maps para confirmar a localização do usuário
	// Exemplo: 37.4226711, -122.0849872
	const [location, setLocation] = useState<LocationObject | null>(null);

	async function requestLocationPermissions() {
		const { granted } = await requestForegroundPermissionsAsync();

		if (granted) {
			const currentPosition = await getCurrentPositionAsync();
			setLocation(currentPosition);

			console.log('LOCALIZAÇÃO ATUAL => ', currentPosition);
		}
	}

	useEffect(() => {
		requestLocationPermissions();
	}, []);

	return (
		<View className="flex-1 items-center bg-gray-800">
			<Text className="text-lg text-white">Detalhes</Text>
			<View>
				<Text className="text-sm">Detalhes</Text>
			</View>
		</View>
	);
};

export default DetailsScreen;
