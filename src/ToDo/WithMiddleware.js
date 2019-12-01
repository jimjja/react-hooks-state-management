import React, { useContext, useEffect } from "react";
import { StoreProvider, StoreContext } from "./store/withMiddleware";
import {useReducerActions} from './store'
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
