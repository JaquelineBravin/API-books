import { Tabs } from "expo-router";
import { Feather, Fontisto } from "@expo/vector-icons";

export default function TabRoutesLayout() {
  return (
    <Tabs screenOptions={{ headerShown: true }}>
      <Tabs.Screen
        name="Home"
        options={{
          title: "Home",
          tabBarIcon: ({ size, color }) => (
            <Feather name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Home"
        options={{
          title: "Procurar",
          tabBarIcon: ({ size, color }) => (
            <Feather name="search" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="categories"
        options={{
          title: "Categories",
          tabBarIcon: ({ size, color }) => (
            <Fontisto name="nav-icon-grid-a" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
