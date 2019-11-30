import React from "react";
import ToDoItem from "../Item";

export default function ToDoList({ items }) {
  return (
    <ul>
      {items.map(item => {
        return <ToDoItem key={item.id} {...item} />;
      })}
    </ul>
  );
}
