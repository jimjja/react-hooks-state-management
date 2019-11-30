import { useContext } from "react";
import { StoreContext } from "..";
import { SET_TODO_ITEMS, ADD_TODO, DELETE_TODO, TOGGLE_ITEM_COMPLETION } from "../constants/types";

export default function useReducerActions() {
  const { dispatch } = useContext(StoreContext);

  function getItems() {
    dispatch({
      type: SET_TODO_ITEMS,
    });
  }

  function toggleItemCompletion(id, isCompleted) {
    dispatch({
      type: TOGGLE_ITEM_COMPLETION,
      id,
      isCompleted
    });
  }

  function deleteItem(id) {
    dispatch({ type: DELETE_TODO, id: id });
  }

  function addItem(value) {
    dispatch({ type: ADD_TODO, value: value });
  }

  return {
    toggleItemCompletion,
    deleteItem,
    addItem,
    getItems
  };
}
