import { combineReducers, createStore } from "redux";
import authReducer from "./authReducer";
import categoryReducer from "./categoryReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";


let reducers = combineReducers({
  categories: categoryReducer,
  usersPage: usersReducer,
  userProfile: profileReducer,
  auth:authReducer
});

let store = createStore(reducers);

window.store = store;

export default store;
