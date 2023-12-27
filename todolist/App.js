import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { View, Text, Alert, ScrollView } from "react-native";
import { s } from "./App.style";
import { useState } from "react";

import { Header } from "./components/Header/Header";
import { CardTodo } from "./components/CardTodo/CardTodo";
import { TabBottomMenu } from "./components/TabBottomMenu/TabBottomMenu";

export default function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "Read the documentation", isCompleted: true },
    { id: 2, title: "Learn React Native", isCompleted: false },
    { id: 3, title: "Build something on your own", isCompleted: false },
    { id: 4, title: "Get a green square today", isCompleted: true },
    { id: 5, title: "Push code to Github", isCompleted: false },
    { id: 6, title: "Create something today", isCompleted: false },
    { id: 7, title: "Practice everyday", isCompleted: true },
    { id: 8, title: "Focus. Get to work", isCompleted: false },
    { id: 9, title: "Stop putting things on hold", isCompleted: false },
  ]);

  const [selectedTabName, setSelectedTabName] = useState("all");

  function getFilteredList() {
    switch (selectedTabName) {
      case "all":
        return todoList;
      case "inProgress":
        return todoList.filter((todo) => !todo.isCompleted);
      case "done":
        return todoList.filter((todo) => todo.isCompleted);
    }
  }
  function deleteTodo(todo) {
    Alert.alert(
      "Delete todo",
      "Are you sure you want to delete this todo item? ",
      [
        {
          text: "Delete",
          style: "destructive",
          onPress: () => {
            console.log("Delete this todo ", todo);
          },
        },
        { text: "Cancel", style: "cancel" },
      ]
    );
  }

  function renderTodoList() {
    return getFilteredList().map((todo) => (
      <View key={todo.id} style={s.cardItem}>
        <CardTodo onLongPress={deleteTodo} onPress={updateTodo} todo={todo} />
      </View>
    ));
  }

  function updateTodo(todo) {
    const updatedTodo = {
      ...todo,
      isCompleted: !todo.isCompleted,
    };
    const updatedTodoList = [...todoList];
    const indexToUpdate = updatedTodoList.findIndex(
      (t) => t.id === updateTodo.id
    );
    updatedTodoList[indexToUpdate] = updatedTodo;
    setTodoList(updatedTodoList);
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={s.app}>
        <View style={s.header}>
          <Header />
        </View>

        <View style={s.body}>
          <ScrollView>{renderTodoList()}</ScrollView>
        </View>

        <View style={s.footer}>
          <TabBottomMenu
            todoList={todoList}
            onPress={setSelectedTabName}
            selectedTabName={selectedTabName}
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
