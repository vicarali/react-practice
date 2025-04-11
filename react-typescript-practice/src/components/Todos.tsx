import Todo from "../models/Todo";
import TodoItem from "./TodoItem";

const items = [new Todo("Item 1"), new Todo("Item 2")];

export default function Todos() {
  return (
    <ul>
      {items.map((item) => (
        <TodoItem key={item.id}>{item.text}</TodoItem>
      ))}
    </ul>
  );
}
