import React, { useEffect, useState } from "react";
import { FlatListBookHorizontal } from "../../app/components/FlatListBookHorizontal";
import { FlatListBookVertical3Col } from "../../app/components/FlatListBookVertical3Col";
import {
	View,
	Text,
	TextInput,
	Image,
	SafeAreaView,
	FlatList,
	SectionList,
	StyleSheet,
} from "react-native";
import { fetchBooks, Book } from "../../api/route";
const HomeScreen: React.FC = () => {
	const [books, setBooks] = useState<Book[]>([]);

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
			data: [books],
		},
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
					renderItem={({ item }
					) => (
					  <Image
						source={{ uri: item.formats["image/jpeg"] }}
						className="w-28 h-36 m-2 rounded-2xl top-1"
					  />
			
					)}
				  />
				)}
			/>

		</SafeAreaView >
	);
};


export default HomeScreen;
