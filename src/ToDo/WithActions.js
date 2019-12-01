import React, { useEffect, useContext } from "react";
import { useReducerActions } from "./store";
import StoreProvider, {
  StoreContext
} from "./store/withoutMiddleware/storeProvider";
import { List, AddItemForm } from "./components";

function ToDo() {
  const { state } = useContext(StoreContext);
  const { getItems } = useReducerActions();

  useEffect(() => {
    getItems();
  }, [getItems]);

  return (
    <div className="todo-app">
      <AddItemForm />
      <List items={state.todoItems} />
    </div>
  );
}

export default function App() {
  return (
    <StoreProvider>
      <ToDo />
    </StoreProvider>
  );
}
