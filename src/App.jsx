import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Components/Header/Header";
import Mainsection from "./Components/Mainsection/Mainsection";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Mainsection />
    </BrowserRouter>
  );
}

export default App;
