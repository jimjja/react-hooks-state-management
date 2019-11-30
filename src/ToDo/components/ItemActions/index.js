import React from "react";
import { useReducerActions } from "../../store";

export default function ToDoItemActions({ isCompleted, id }) {
  const { deleteItem, toggleItemCompletion } = useReducerActions();

  function getToggleButtonName() {
    return isCompleted ? "Undo" : "Finish";
  }

  return (
    <>
      <button
        type="button"
        onClick={() => toggleItemCompletion(id, !isCompleted)}
      >
        {getToggleButtonName()}
      </button>
      <button
        type="button"
        onClick={() => {
          deleteItem(id);
        }}
      >
        Remove
      </button>
    </>
  );
}
