import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { View, Text, ScrollView } from "react-native";
import { s } from "./App.style";
import { useState } from "react";

import { Header } from "./components/Header/Header";
import { CardTodo } from "./components/CardTodo/CardTodo";

export default function App() {
  const [todoList, setTodoList] = useState([
    {id: 1, title: "Read the documentation", isCompleted: true },
    {id: 2, title: "Learn React Native", isCompleted: false },
    {id: 3, title: "Build something on your own", isCompleted: false },
    {id: 4, title: "Read the documentation", isCompleted: true },
    {id: 5, title: "Learn React Native", isCompleted: false },
    {id: 6, title: "Build something on your own", isCompleted: false },
    {id: 7, title: "Read the documentation", isCompleted: true },
    {id: 8, title: "Learn React Native", isCompleted: false },
    {id: 9, title: "Build something on your own", isCompleted: false },
  ])

  function renderTodoList(){
    return todoList.map((todo) =>  (
    <View key={todo.id} style={s.cardItem}>
      <CardTodo todo={todo}/>
      </View>
    ));
  }
  return (
    <SafeAreaProvider>
      <SafeAreaView style={s.app}>
        <View style={s.header}>
          <Header />
        </View>

        <View style={s.body}>
          <ScrollView>
          {renderTodoList()}
          </ScrollView>
        </View>

        <View style={s.footer}>
          <Text>Footer</Text>
        </View>

      </SafeAreaView>
    </SafeAreaProvider>
  );
}
