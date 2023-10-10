import React, { useEffect, useState } from "react";
import {
	View,
	Text,
	TextInput,
	Image,
	SafeAreaView,
	FlatList,
} from "react-native";
import { fetchBooks, Book } from "../../api/route";
const HomeScreen: React.FC = () => {
	const [books, setBooks] = useState<Book[]>([]);

	useEffect(() => {
		async function fetchData() {
			const fetchedBooks = await fetchBooks();
			setBooks(fetchedBooks);
		}

		fetchData();
	}, []);

	return (
		<SafeAreaView className="flex-1 justify-center">
			<View className="flex-1 bg-gray-800">
				<Text className="text-zinc-400 text-xl ml-6 mt-4 font-semibold">
					O que gostaria de ler?
				</Text>
				<TextInput
					className="h-11 w-11/12 m-3 p-3 left-2 bg-zinc-700 rounded-2xl"
					placeholder="Pesquisar"
				/>

				<FlatList
					horizontal={true}
					showsHorizontalScrollIndicator={false}
					data={books}
					renderItem={({ item }
					) => (
						<Image
							source={{ uri: item.formats["image/jpeg"] }}
							style={{ width: 150, height: 220, marginRight: 12, marginLeft: 15, borderRadius: 10, top: 10 }}
						/>
					)}
				/>

				<View className=" flex-row p-2">
					<Text className="text-zinc-400 text-lg p-2">Populares</Text>
					<Text className="text-zinc-400 text-lg p-2">Em breve</Text>
					<Text className="text-zinc-400 text-lg p-2">Premiados</Text>
					<Text className="text-zinc-400 text-lg p-2">Brasileiros</Text>
				</View>

			</View>
		</SafeAreaView>
	);
};

export default HomeScreen;
