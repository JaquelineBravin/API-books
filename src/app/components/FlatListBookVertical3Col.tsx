import { useEffect, useState } from 'react';
import { Button, FlatList, Image, Pressable, SectionList, Text } from 'react-native';
import { Book, fetchBooks } from '../../api/route';
import { Link, Tabs, useRouter } from 'expo-router';

export const FlatListBookVertical3Col = () => {
	const route = useRouter();
	const [books, setBooks] = useState<Book[]>([]);

	useEffect(() => {
		async function fetchData() {
			const fetchedBooks: any = await fetchBooks();
			setBooks(fetchedBooks);
		}
		fetchData();
	}, []);


	const handleImagePress = (book: Book) => {
		// console.log('book => ', book);
		route.push({ pathname: "/details", params: { id: book.id, title: book.title, NmrDown: book.download_count, laguage: book.languages } })
	};

	const DATA = [
		{
			title: 'Populares',
			data: books
		},
		// {
		//   title: 'Em breve',
		//   data: [books],
		// },
		// {
		//   title: 'Premiados',
		//   data: [books],
		// },
		// {
		//   title: 'Brasileiros',
		//   data: [books],
		// },
	];

	return (
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
					renderItem={({ item }): any => {
						return (
							<Pressable onPress={() => {
								handleImagePress(item);
							}}>
								<Image
									source={{ uri: item.formats['image/jpeg'] }}
									className="flex w-36 h-48 m-2 rounded-2xl top-1  "
								/>
							</Pressable>
						);
					}}
				/>
			)}
		/>
	);
};




export default FlatListBookVertical3Col;


/*
download_count
"languages":
*/