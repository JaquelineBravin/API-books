import React, { useEffect, useRef, useState } from 'react';
import {
	View,
	Text,
	TextInput,
	Image,
	SafeAreaView,
	FlatList,
	Button,
	Platform,
	SectionList,
	StyleSheet
} from 'react-native';
import { fetchBooks, Book } from '../../api/route';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';
import FlatListBookHorizontal from '../components/FlatListBookHorizontal';
import { StatusBar } from 'expo-status-bar';

Notifications.setNotificationHandler({
	handleNotification: async () => ({
		shouldShowAlert: true,
		shouldPlaySound: false,
		shouldSetBadge: false
	})
});

async function registerForPushNotificationsAsync() {
	let token;

	if (Platform.OS === 'android') {
		await Notifications.setNotificationChannelAsync('default', {
			name: 'default',
			importance: Notifications.AndroidImportance.MAX,
			vibrationPattern: [0, 250, 250, 250],
			lightColor: '#FF231F7C'
		});
	}

	if (Device.isDevice) {
		const { status: existingStatus } = await Notifications.getPermissionsAsync();
		let finalStatus = existingStatus;

		if (existingStatus !== 'granted') {
			const { status } = await Notifications.requestPermissionsAsync();
			finalStatus = status;
		}

		if (finalStatus !== 'granted') {
			alert('Não foi possivel pegar o token para notificação push');
			return null;
		}

		const expoToken = await Notifications.getExpoPushTokenAsync({
			projectId: '3c21e573-98f4-480a-bf40-0af262a3a9a9'
		});
		token = expoToken.data;
		console.log(token);
	} else {
		alert('So é possivel em dispositivos fisicos');
	}

	return token;
}

async function scheduleNotificationAsync() {
	await Notifications.scheduleNotificationAsync({
		content: {
			title: 'hello world!',
			body: 'hehehe boy',
			data: {
				id: 'algum id',
				name: 'nome qualquer'
			}
		},
		trigger: {
			seconds: 1
		}
	});
}

const HomeScreen: React.FC = () => {
	const [books, setBooks] = useState<Book[]>([]);
	const [expoPushToken, setExpoPushToken] = useState('');
	const [notification, setNotification] = useState(false);
	const notificationListener = useRef<Notifications.Subscription>();
	const responseListener = useRef<Notifications.Subscription>();

	useEffect(() => {
		registerForPushNotificationsAsync().then((token) => {
			if (token == null) {
				console.error('Ops');
				return;
			}
			setExpoPushToken(token);
		});

		notificationListener.current = Notifications.addNotificationReceivedListener((notification) => {
			// setNotification(notification);
			setNotification(true);
		});

		responseListener.current = Notifications.addNotificationResponseReceivedListener((response) => {
			console.log(response);
		});

		return () => {
			if (notificationListener.current !== undefined) {
				Notifications.removeNotificationSubscription(notificationListener.current);
			}

			if (responseListener.current !== undefined) {
				Notifications.removeNotificationSubscription(responseListener.current);
			}
		};
	});

	useEffect(() => {
		async function fetchData() {
			const fetchedBooks: any = await fetchBooks();
			setBooks(fetchedBooks);
		}

		fetchData();
	}, []);
	const DATA = [
		{
			title: 'Populares',
			data: [books]
		}
		// {
		// 	title: 'Em breve',
		// 	data: [books],
		// },
		// {
		// 	title: 'Premiados',
		// 	data: [books],
		// },
		// {
		// 	title: 'Brasileiros',
		// 	data: [books],
		// },
	];

	return (
		<SafeAreaView className=" container flex-1 bg-gray-800">
			<View className="flex">
				<Button
					title="Chamar notificações"
					onPress={async () => {
						await scheduleNotificationAsync();
					}}
				></Button>
				<Text className="text-zinc-400 text-xl ml-6 mt-4 font-semibold">
					O que gostaria de ler?
				</Text>
				<TextInput
					className="h-11 w-11/12 m-3 p-3 left-2 bg-zinc-700 rounded-2xl fixed"
					placeholder="Pesquisar"
				/>

				<FlatListBookHorizontal />
			</View>

			<SectionList
				sections={DATA}
				keyExtractor={(item: any, index: any) => item + index}
				renderSectionHeader={({ section: { title } }) => (
					<Text className="flex text-white text-base">{title}</Text>
				)}
				renderItem={() => (
					<FlatList
						horizontal={false}
						showsHorizontalScrollIndicator={false}
						numColumns={3}
						data={books}
						renderItem={({ item }) => (
							<Image
								source={{ uri: item.formats['image/jpeg'] }}
								className="w-28 h-36 m-2 rounded-2xl top-1"
							/>
						)}
					/>
				)}
			/>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
});

export default HomeScreen;
