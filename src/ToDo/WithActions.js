import React from "react";
import { StoreProvider } from "./store/withMiddleware";
import { List, AddItemForm } from "./components";

export default function ToDo() {
  return (
    <div className="todo-app">
      <StoreProvider>
        <AddItemForm />
        <List />
      </StoreProvider>
    </div>
  );
}
