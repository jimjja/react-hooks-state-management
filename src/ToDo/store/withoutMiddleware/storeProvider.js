import React, { useReducer, createContext } from "react";
import { reducers } from "../";
import initialState from '../constants/initialState';

const StoreContext = createContext();

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducers, initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export { StoreProvider as default, StoreContext };
