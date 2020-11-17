import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import categoryReducer from "./categoryReducer";


let reducers = combineReducers({

  categories: categoryReducer,
});

let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;
