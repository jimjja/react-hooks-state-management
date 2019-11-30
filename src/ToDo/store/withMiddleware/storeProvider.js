import React, { createContext, useReducer } from "react";
import { reducers, initialState } from ".";
import apiMiddleware from "./middleware/apiMiddleware";
import storageMiddleware from "./middleware/storageMiddleware";

const StoreContext = createContext();

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducers, initialState);

  const storageMiddlewareApplied = storageMiddleware(dispatch);
  const apiMiddlewareApplied = apiMiddleware(storageMiddlewareApplied);

  return (
    <StoreContext.Provider value={{ state, dispatch: apiMiddlewareApplied }}>
      {children}
    </StoreContext.Provider>
  );
};

export { StoreProvider as default, StoreContext };
