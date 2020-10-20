import React from "react";
import Maintopmenu from "./Maintopmenu/Maintopmenu";
import Bannersection from "./Bannersection/Bannersection";
import Categoriesmenu from "./Categoriesmenu/Categoriesmenu";
import Contentblock from "./Contentblock/Contentblock";

const Mainsection = (props) => {

  return (
    <>
      <Maintopmenu />
      <Bannersection />

      <div className="container mt-3 central-cont-block">
        <div className="row">
          <Categoriesmenu />
          <Contentblock
            categories={props.categories}
            dispatch={props.dispatch}
          />
        </div>
      </div>
    </>
  );
};

export default Mainsection;
