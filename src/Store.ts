import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { TodoType } from "./actions/TodoActionTypes";
import RootReducer from "./reducers/RootReducer";

const Store = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export interface RootStore {
  todos: TodoType[] | [];
}

export default Store;
