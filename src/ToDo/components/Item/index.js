import React from "react";
import ItemActions from "../ItemActions";

export default function ToDoItem({ name, isCompleted, id }) {
  return (
    <li>
      {name}
      <ItemActions isCompleted={isCompleted} id={id} />
      {isCompleted ? "Completed" : "Not Completed"}
    </li>
  );
}
