import { ToDoHttp } from "../../../../Services/Protocol/Domains";
import {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_ITEM_COMPLETION,
  SET_TODO_ITEMS
} from "../../constants/types";

export default dispatch => async action => {
  switch (action.type) {
    case SET_TODO_ITEMS: {
      const results = await ToDoHttp.getItems();
      const newAction = {
        ...action,
        todoItems: results
      };
      console.log("API SET");
      return dispatch(newAction);
    }
    case ADD_TODO: {
      const result = await ToDoHttp.addItem(action.value);
      const newAction = {
        ...action,
        newItem: result
      };
      console.log("API ADD");
      return dispatch(newAction);
    }
    case TOGGLE_ITEM_COMPLETION: {
      await ToDoHttp.updateItem({
        id: action.id,
        isCompleted: action.isCompleted
      });
      console.log("API UPDATE");
      return dispatch(action);
    }
    case DELETE_TODO: {
      await ToDoHttp.deleteItem(action.id);
      console.log("API DELETE");
      return dispatch(action);
    }
    default:
      return dispatch(action);
  }
};
