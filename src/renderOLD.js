import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";

import "./App.css";
import { sendContactForm, handleCommentChange, addComment } from "./Redux/state";

const renderEntireTree = (state) =>{
    ReactDOM.render(<App state={state} addComment={addComment} sendContactForm={sendContactForm} handleCommentChange={handleCommentChange} />, document.getElementById("root"));

}

export default renderEntireTree;