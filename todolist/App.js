import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { View, Text, Alert, ScrollView } from "react-native";
import { s } from "./App.style";
import { useState } from "react";

import { Header } from "./components/Header/Header";
import { CardTodo } from "./components/CardTodo/CardTodo";
import { TabBottomMenu } from "./components/TabBottomMenu/TabBottomMenu";
import { ButtonAdd } from "./components/ButtonAdd/ButtonAdd";
import Dialog from "react-native-dialog";
import uuid from "react-native-uuid";


export default function App() {
  const [todoList, setTodoList] = useState([]);
  const [selectedTabName, setSelectedTabName] = useState("all");
  const [isAddDialogDisplayed, setIsAddDialogDisplayed] = useState(false);
  const [inputValue, setInputValue] = useState("");

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
  function deleteTodo(todoToDelete) {
    Alert.alert(
      "Delete todo",
      "Are you sure you want to delete this todo item? ",
      [
        {
          text: "Delete",
          style: "destructive",
          onPress: () => {
            setTodoList(todoList.filter((t) => t.id !== todoToDelete.id));
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

  function addTodo() {
    const newTodo = {
      id: uuid.v4(),
      title: inputValue,
      isCompleted: false,
    };
    setTodoList([...todoList, newTodo])
    setIsAddDialogDisplayed(false);
    setInputValue("");
  }

  function renderAddDialog() {
    return (
      <Dialog.Container
        visible={isAddDialogDisplayed}
        onBackdropPress={() => setIsAddDialogDisplayed(false)}
      >
        <Dialog.Title>Add New</Dialog.Title>
        <Dialog.Description>Enter new todo</Dialog.Description>
        <Dialog.Input
          onChangeText={setInputValue}
          placeholder="Ex: Get shit done"
        />
        <Dialog.Button
          label="Cancel"
          color="grey"
          onPress={() => setIsAddDialogDisplayed(false)}
        />
        <Dialog.Button 
        disabled={inputValue.length === 0}
        label="Save" 
        onPress={addTodo} 
        />
      </Dialog.Container>
    );
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={s.app}>
        <View style={s.header}>
          <Header />
        </View>

        <View style={s.body}>
          <ScrollView>{renderTodoList()}</ScrollView>
          <ButtonAdd onPress={() => setIsAddDialogDisplayed(true)} />
        </View>

        <View style={s.footer}>
          <TabBottomMenu
            todoList={todoList}
            onPress={setSelectedTabName}
            selectedTabName={selectedTabName}
          />
        </View>
        {renderAddDialog()}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
