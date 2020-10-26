import { combineReducers, createStore } from "redux";
import categoryReducer from "./categoryReducer";
import usersReducer from "./usersReducer";


let reducers = combineReducers({
  categories: categoryReducer,
  usersPage: usersReducer,
});

let store = createStore(reducers);

export default store;
