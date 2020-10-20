import React from "react";
import store from "./Redux/redux-store";
import ReactDOM from "react-dom";
import App from "./App.jsx";

import "./App.css";
console.log(store);
const renderEntireTree = (state) => {
  ReactDOM.render(<App state={state} dispatch={store.dispatch.bind(store)} />, document.getElementById("root"));
};

renderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    renderEntireTree(state);
});

export default renderEntireTree;
