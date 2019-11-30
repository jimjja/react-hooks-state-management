import React, { useReducer, useEffect, useContext } from "react";
import { reducers, initialState, useReducerActions } from "./store";
import StoreContext from "./store/withoutMiddleware/context";
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
  const [state, dispatch] = useReducer(reducers, initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      <ToDo />
    </StoreContext.Provider>
  );
}
