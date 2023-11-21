import { useEffect, useState } from 'react';
import { FlatList, Image } from 'react-native';
import { Book, fetchBooks } from '../../api/route';

export const FlatListBookHorizontal = () => {
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
			horizontal={true}
			showsHorizontalScrollIndicator={false}
			data={books}
			renderItem={({ item }) => (
				<Image
					source={{ uri: item.formats['image/jpeg'] }}
					className="w-40 h-56 m-2 rounded-2xl top-1"
				/>
			)}
		/>
	);
};

export default FlatListBookHorizontal;
