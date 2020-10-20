import React from "react";
import { NavLink } from "react-router-dom";


const Item = (props) => {
 
  return (
  <div className="col justify-content-center">
     <h5>{props.itemData.name}</h5>
    <div><img src={props.itemData.imgLink} alt="sad" /></div>
    <NavLink to={props.itemData.link} >Details</NavLink>
  </div>
  );
};

export default Item;
