import {
  View,
  Text,
  TextInput,
  Image,
  SafeAreaView,
  Button,
} from "react-native";

export default function Home() {
  return (
    <SafeAreaView className="flex-1 justify-center">
      <View className="flex-1 bg-gray-800">
        <Text className="text-zinc-400 text-lg ml-6 mt-10 font-semibold">
          O que gostaria de ler?
        </Text>
        <TextInput
          className="h-10 m-3 p-3 bg-zinc-700 rounded-2xl text-neutral-500 text-sm font-normal"
          placeholder="Pesquisar"
        />
        <View className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          {/* <Image
          source={require("./caminho-para-sua-imagem.png")}
          className="w-6 h-6 text-gray-400"
        /> */}
        </View>
        <Text className="text-slate-300">Destaques</Text>
      </View>
    </SafeAreaView>
  );
}
