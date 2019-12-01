import React, { createContext, useReducer, useCallback } from "react";
import { reducers, initialState } from ".";
import apiMiddleware from "./middleware/apiMiddleware";
import storageMiddleware from "./middleware/storageMiddleware";

const StoreContext = createContext();

function applyMiddleware(dispatch) {
  const middlewares = [storageMiddleware, apiMiddleware];

  let advancedDispatcher = dispatch;
  middlewares.forEach(middleware => {
    advancedDispatcher = middleware(useCallback(advancedDispatcher, [dispatch]));
  });
  return advancedDispatcher;
}

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducers, initialState);

  const advancedDispatcher = useCallback(applyMiddleware(dispatch), [dispatch]);

  return (
    <StoreContext.Provider value={{ state, dispatch: advancedDispatcher }}>
      {children}
    </StoreContext.Provider>
  );
};

export { StoreProvider as default, StoreContext };
