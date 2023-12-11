import { s } from "./CardTodo.style";
import { Image, Text, TouchableOpacity, View } from "react-native";
import checkImg from "../../assets/check.png";

export function CardTodo({ todo }) {
    return (
  <TouchableOpacity style={s.card}>
    <Text style={[s.title, todo.isCompleted && {textDecorationLine: "line-through"}]}>{todo.title}</Text>
    {todo.isCompleted && <Image style={s.img} source={checkImg} />}
  </TouchableOpacity>

    )
}