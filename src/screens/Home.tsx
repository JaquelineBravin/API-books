import { View, Text, TextInput, Image } from "react-native";

export function Home() {
  return (
    <View className="flex-1 items-center bg-slate-600">
      <Text className="text-white">O que gostaria de ler?</Text>
      <TextInput
        placeholder="Procurar"
        className="border rounded-md p-2 pl-10 w-full"
        autoFocus={true}
      />
      <View className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <Image
          source={require("./caminho-para-sua-imagem.png")}
          className="w-6 h-6 text-gray-400"
        />
      </View>
      <Text className="text-slate-300">Destaques</Text>
    </View>
  );
}
