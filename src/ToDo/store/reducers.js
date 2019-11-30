import {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_ITEM_COMPLETION,
  SET_TODO_ITEMS
} from "./constants/types";

export default function reducer(state, action) {
  switch (action.type) {
    case SET_TODO_ITEMS: {
      return {
        ...state,
        todoItems: action.todoItems
      };
    }
    case ADD_TODO:
      const updatedItems = [...state.todoItems, action.newItem];
      return {
        ...state,
        todoItems: updatedItems
      };
    case DELETE_TODO:
      const items = state.todoItems.filter(n => n.id !== action.id);
      return {
        ...state,
        todoItems: items
      };
    case TOGGLE_ITEM_COMPLETION:
      const notes = [...state.todoItems];
      const noteIndex = notes.findIndex(n => n.id === action.id);
      if (noteIndex > -1) {
        notes[noteIndex].isCompleted = action.isCompleted;
      }
      return {
        ...state,
        todoItems: notes
      };
    default:
      return state;
  }
}
