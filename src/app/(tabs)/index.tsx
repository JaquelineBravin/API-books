import React, { useEffect, useRef, useState } from "react";
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
  Alert,
} from "react-native";
import { fetchBooks, Book } from "../../api/route";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import Constants from "expo-constants";
import FlatListBookHorizontal from "../components/FlatListBookHorizontal";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

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
      title: "Populares",
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

  async function handleCallNotification() {
    const { status } = await Notifications.getPermissionsAsync();
    if (status !== "granted") {
      alert("Você não possui permissão para receber notificações");
      return;
    }
    let token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  }

  return (
    <SafeAreaView className=" container flex-1 bg-gray-800">
      <View className="flex">
        <Button
          title="Chamar notificações"
          onPress={handleCallNotification}
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
                source={{ uri: item.formats["image/jpeg"] }}
                className="w-28 h-36 m-2 rounded-2xl top-1"
              />
            )}
          />
        )}
      />
    </SafeAreaView>
  );
};
export default HomeScreen;
