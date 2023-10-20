import { Tabs } from "expo-router";
import { Feather, Fontisto } from "@expo/vector-icons";
import React from "react";

export default function TabRoutesLayout() {
  <div className="bg-gray-800"></div>;
  return (
    <Tabs screenOptions={{ headerShown: true }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          headerStyle: { backgroundColor: "rgb(31 41 55)" },
          headerShadowVisible: false,
          tabBarStyle: {
            backgroundColor: "rgb(31 41 55)",
          },
          tabBarIcon: ({ size, color }) => (
            <Feather name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="details"
        options={{
          title: "Detalhes",
          headerShown: false,
          headerStyle: { backgroundColor: "rgb(31 41 55))" },
          headerShadowVisible: false,
          tabBarStyle: {
            backgroundColor: "rgb(31 41 55)",
          },
          tabBarIcon: ({ size, color }) => (
            <Feather name="search" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="categories"

        options={{
          title: "Categorias",
          headerShown: false,
          headerTitleAlign: "left",
          headerShadowVisible: false,
          tabBarStyle: {
            backgroundColor: "rgb(31 41 55)",
          },
          tabBarIcon: ({ size, color }) => (
            <Fontisto name="nav-icon-grid-a" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
