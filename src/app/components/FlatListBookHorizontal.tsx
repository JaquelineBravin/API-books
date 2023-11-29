import { useEffect, useState } from 'react';
import { FlatList, Image, Pressable } from 'react-native';
import { Book, fetchBooks } from '../../api/route';
import { useRouter } from 'expo-router';

export const FlatListBookHorizontal = () => {
	const [books, setBooks] = useState<Book[]>([]);
	const route = useRouter();
	useEffect(() => {
		async function fetchData() {
			const fetchedBooks: any = await fetchBooks();
			setBooks(fetchedBooks);
		}

		fetchData();
	}, []);

	const handleImagePress = (book: Book) => {
		// console.log('book => ', book);
		route.push({ pathname: "/details", params: { id: book.id, title: book.title, NmrDown: book.download_count, laguage: book.languages, format: book.formats['image/jpeg'] } })
	};
	return (
		<FlatList
			horizontal={true}
			showsHorizontalScrollIndicator={false}
			data={books}
			renderItem={({ item }) => (
				<Pressable onPress={() => {
					handleImagePress(item);
				}}>
					<Image
						source={{ uri: item.formats['image/jpeg'] }}
						className="w-40 h-56 m-2 rounded-2xl top-1"
					/>
				</Pressable>
			)}
		/>
	);
};

export default FlatListBookHorizontal;
