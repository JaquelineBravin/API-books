import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image, ScrollView } from "react-native";
import { fetchBooks, Book } from "../../api/route";
import FlatListBookHorizontal from "../components/FlatListBookHorizontal";

const CategoriesScreen: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  useEffect(() => {
    async function fetchData() {
      const fetchedBooks: any = await fetchBooks();
      setBooks(fetchedBooks);
    }

    fetchData();
  }, []);
  return (
    <ScrollView
    horizontal={false}
    >
      

      <View className="flex-1 bg-gray-800">
        <Text className="flex text-2xl text-zinc-400 left-32 mt-10 ">Categorias</Text>
        <View>
          <Text className="text-xl text-zinc-400 mt-4 ml-5">Fantasia</Text>
          <FlatListBookHorizontal />
        </View>
        <View>
          <Text className="text-xl text-zinc-400 ml-5">Romance</Text>
          <FlatListBookHorizontal />
        </View>
        <View>
          <Text className="text-xl text-zinc-400 ml-5">Terror</Text>
          <FlatListBookHorizontal />
        </View>
        <View>
          <Text className="text-xl text-zinc-400 ml-5">Clássico</Text>
          <FlatListBookHorizontal />
        </View>
        <View>
          <Text className="text-xl text-zinc-400 ml-5">Infantil</Text>
          <FlatListBookHorizontal />
        </View>
      </View>
    </ScrollView>
  );
};

export default CategoriesScreen;


