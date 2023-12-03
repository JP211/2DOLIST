import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { View, Text } from "react-native";
import { s } from "./App.style";

import { Header } from "./components/Header/Header";
import { CardTodo } from "./components/CardTodo/CardTodo";

const TODO_LIST =[
  {id: 1, title: "Read the documentation", isCompleted: true },
  {id: 2, title: "Learn React Native", isCompleted: false },
  {id: 3, title: "Build something on your own", isCompleted: false },
];

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={s.app}>
        <View style={s.header}>
          <Header />
        </View>

        <View style={s.body}>
          <CardTodo todo={TODO_LIST[0]} />
        </View>

        <View style={s.footer}>
          <Text>Footer</Text>
        </View>

      </SafeAreaView>
    </SafeAreaProvider>
  );
}
