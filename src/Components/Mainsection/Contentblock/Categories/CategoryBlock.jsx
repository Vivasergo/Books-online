import React from "react";
import Item from "./Items/Item";

const CategoryBlock = (props) => {

  return (
    <div>
      <h4 className="row d-flex justify-content-center mb-3">{props.categoryData.title}</h4>
      <div className="row">
        {props.categoryData.items.map((item) => {
          return <Item key={item.id} itemData={item} />;
        })}
      </div>
          </div>
  );
};

export default CategoryBlock;
