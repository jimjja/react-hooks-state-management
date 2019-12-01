import { useContext, useCallback } from "react";
import { StoreContext } from "./storeProvider";
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

  const getItems = useCallback(async () => {
    const results = await ToDoHttp.getItems();
    await ToDoStorage.setItems(results);

    dispatch({
      type: SET_TODO_ITEMS,
      todoItems: results
    });
  }, [dispatch]);

  const toggleItemCompletion = useCallback(
    async (id, isCompleted) => {
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
    },
    [dispatch]
  );

  const deleteItem = useCallback(
    async id => {
      await ToDoHttp.deleteItem(id);
      await ToDoStorage.deleteItem(id);
      dispatch({ type: DELETE_TODO, id });
    },
    [dispatch]
  );

  const addItem = useCallback(
    async value => {
      const result = await ToDoHttp.addItem(value);
      await ToDoStorage.addItem(result);

      dispatch({ type: ADD_TODO, newItem: result });
    },
    [dispatch]
  );

  return {
    toggleItemCompletion,
    deleteItem,
    addItem,
    getItems
  };
}
