import { useContext, useCallback } from "react";
import StoreContext from "./context";
import {
  SET_TODO_ITEMS,
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_ITEM_COMPLETION
} from "../constants/types";
import { ToDoHttp } from "../../../Services/Protocol/Domains";
import { ToDoStorage } from "../../../Services/Storage/Domains";

export default function useReducerActions() {
  const { dispatch } = useContext(StoreContext);

  const getItems = useCallback(async () =>  {
    const results = await ToDoHttp.getItems();
    await ToDoStorage.setItems(results);

    dispatch({
      type: SET_TODO_ITEMS,
      todoItems: results
    });
  }, [dispatch])

  async function toggleItemCompletion(id, isCompleted) {
    await ToDoHttp.updateItem({
      id,
      isCompleted
    });

    await ToDoStorage.updateItem({
      id,
      isCompleted
    });

    dispatch({
      type: TOGGLE_ITEM_COMPLETION,
      id,
      isCompleted
    });
  }

  async function deleteItem(id) {
    await ToDoHttp.deleteItem(id);
    await ToDoStorage.deleteItem(id);
    dispatch({ type: DELETE_TODO, id });
  }

  async function addItem(value) {
    const result = await ToDoHttp.addItem(value);
    await ToDoStorage.addItem(result);

    dispatch({ type: ADD_TODO, newItem: result });
  }

  return {
    toggleItemCompletion,
    deleteItem,
    addItem,
    getItems
  };
}
