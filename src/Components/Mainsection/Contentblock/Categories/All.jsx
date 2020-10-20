import React from "react";

const All = (props) => {
  return (
    <div>
     <h3>All block</h3>  

    {props.allData.items.map(({id, link, name, is30off}) => {
      return(
        <p key={id}>{id} {link +" "+ name +" "+ is30off}</p>
      )
    })}

    </div>
  );
};

export default All;
