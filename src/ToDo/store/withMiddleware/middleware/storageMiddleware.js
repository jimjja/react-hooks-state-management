import { ToDoStorage } from "../../../../Services/Storage/Domains";
import {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_ITEM_COMPLETION,
  SET_TODO_ITEMS
} from "../../constants/types";

export default dispatch => async action => {
  switch (action.type) {
    case SET_TODO_ITEMS:
      await ToDoStorage.setItems(action.todoItems);
      console.log("STORAGE GET TO DO");
      return dispatch(action);
    case ADD_TODO: {
      await ToDoStorage.addItem(action);
      console.log("STORAGE ADD");

      return dispatch(action);
    }
    case TOGGLE_ITEM_COMPLETION: {
      await ToDoStorage.updateItem({
        id: action.id,
        isCompleted: action.isCompleted
      });
      console.log("STORAGE UPDATE");
      return dispatch(action);
    }
    case DELETE_TODO: {
      await ToDoStorage.deleteItem(action.id);
      console.log("STORAGE DELETE");
      return dispatch(action);
    }
    default:
      return dispatch(action);
  }
};
