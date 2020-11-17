import React from "react";
import { NavLink } from "react-router-dom";


const Item = (props) => {
 
  return (
  <div className="col-xs-12 col-sm-6 col-lg-3 cat-item-block mb-4">
     <h6 className="cat-item-title">{props.itemData.name}</h6>
    <div><img src={props.itemData.imgLink} alt="sad" /></div>
    <NavLink className="text-secondary" to={props.itemData.link} >Details</NavLink>
  </div>
  );
};

export default Item;
