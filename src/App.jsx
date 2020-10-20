import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Components/Header/Header";
import Mainsection from "./Components/Mainsection/Mainsection";


function App(props) {

  return (
    <BrowserRouter>
      <Header />
      <Mainsection
        categories={props.state.categories}
        dispatch={props.dispatch}
      />
    </BrowserRouter>
  );
}

export default App;
