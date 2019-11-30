import reducers from "./reducers";
import actionWithMiddleware from "./withMiddleware/useReducerActions";
import actionWithoutMiddleware from "./withoutMiddleware/useReducerActions";
import initialState from "./constants/initialState";
import StoreProvider, { StoreContext } from "./withMiddleware/storeProvider";

let useReducerActions = actionWithMiddleware;
if (process.env.REACT_APP_WITH_MIDDLEWARE === "0") {
  useReducerActions = actionWithoutMiddleware;
}

export {
  reducers,
  useReducerActions,
  initialState,
  StoreContext,
  StoreProvider
};
