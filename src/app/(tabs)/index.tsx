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
} from "react-native";
import { fetchBooks, Book } from "../../api/route";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import Constants from "expo-constants";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

async function sendPushNotification(expoPushToken: any) {
  const message = {
    to: expoPushToken,
    sound: "default",
    title: "Original Title",
    body: "And here is the body!",
    data: { someData: "goes here" },
  };

  await fetch("https://exp.host/--/api/v2/push/send", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Accept-encoding": "gzip, deflate",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(message),
  });
}
async function registerForPushNotificationsAsync() {
  let token;

  if (Platform.OS === "android") {
    Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      alert("Failed to get push token for push notification!");
      return;
    }
    token = await Notifications.getExpoPushTokenAsync({
      projectId: Constants.extra.eas.projectId,
    });
    console.log(token);
  } else {
    alert("Must use physical device for Push Notifications");
  }

  return token;
}

const HomeScreen: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [expoPushToken, setExpoPushToken] = useState("");
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    async function fetchData() {
      const fetchedBooks = await fetchBooks();
      setBooks(fetchedBooks);
    }

    fetchData();

    registerForPushNotificationsAsync().then((token) =>
      setExpoPushToken(token)
    );

    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        setNotification(notification);
      });

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log(response);
      });

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
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
          data={books}
          renderItem={({ item }) => (
            <Image
              source={{ uri: item.formats["image/jpeg"] }}
              style={{ width: 100, height: 160, marginRight: 10 }}
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
