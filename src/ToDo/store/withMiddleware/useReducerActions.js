import { useContext, useCallback } from "react";
import { StoreContext } from "..";
import {
  SET_TODO_ITEMS,
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_ITEM_COMPLETION
} from "../constants/types";

export default function useReducerActions() {
  const { dispatch } = useContext(StoreContext);

  const getItems = useCallback(() => {
    dispatch({
      type: SET_TODO_ITEMS
    });
  }, [dispatch]);

  const toggleItemCompletion = useCallback(
    (id, isCompleted) => {
      dispatch({
        type: TOGGLE_ITEM_COMPLETION,
        id,
        isCompleted
      });
    },
    [dispatch]
  );

  const deleteItem = useCallback(
    id => {
      dispatch({ type: DELETE_TODO, id: id });
    },
    [dispatch]
  );

  const addItem = useCallback(
    value => {
      dispatch({ type: ADD_TODO, value: value });
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
