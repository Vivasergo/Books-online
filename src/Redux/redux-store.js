import { combineReducers, createStore } from "redux";
import categoryReducer from "./categoryReducer";
import chatReducer from "./chatReducer";

let reducers = combineReducers({
  categories: categoryReducer,
  chat: chatReducer,
});

let store = createStore(reducers);

export default store;
