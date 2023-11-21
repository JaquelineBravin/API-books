import { useEffect, useState } from 'react';
import { FlatList, Image } from 'react-native';
import { Book, fetchBooks } from '../../api/route';

export const FlatListBookVertical3Col = () => {
	const [books, setBooks] = useState<Book[]>([]);
	useEffect(() => {
		async function fetchData() {
			const fetchedBooks: any = await fetchBooks();
			setBooks(fetchedBooks);
		}

		fetchData();
	}, []);
	return (
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
	);
};

export default FlatListBookVertical3Col;
