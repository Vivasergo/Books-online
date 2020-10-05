import React from "react";
import Maintopmenu from "./Maintopmenu";
import Bannersection from "./Bannersection";
import Categoriesmenu from "./Categoriesmenu";
import Contentblock from "./Contentblock/Contentblock";


const Mainsection = () => {
  return (
    <>
      <Maintopmenu />
      <Bannersection />

      <div className="container mt-3 central-cont-block">
        <div className="row">
          <Categoriesmenu />
          <Contentblock />
        </div>
      </div>
    </>
  );
};

export default Mainsection;
