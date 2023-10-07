import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
  SafeAreaView,
} from "react-native";
import { fetchBooks, Book } from "../../api/route"; // Importe a função fetchBooks

const HomeScreen: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    async function fetchData() {
      const fetchedBooks = await fetchBooks(); // Use a função fetchBooks para buscar os livros da API
      setBooks(fetchedBooks); // Defina os livros no estado local
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
        {/* Renderize os livros aqui */}
        <ScrollView>
          {books.map((book) => (
            <View key={book.id}>
              <Text>{book.id}</Text>
              <Text>{book.title}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
