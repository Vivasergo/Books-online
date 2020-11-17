import React from "react";

import Item from "../Items/Item";


const Fiction = (props) => {

  return (
    <div>
      <h3 className="row d-flex justify-content-center">{props.fictionData.title}</h3>
      <div className="row">
        {props.fictionData.items.map((item) => {
          return <Item key={item.id} itemData={item} />;
        })}
      </div>
          </div>
  );
};

export default Fiction;
