import React from "react";
import CommentContainer from "./CommentContainer";
import Item from "./Items/Item";


const Fiction = (props) => {
  return (
    <div>
      <h3 className="row">Fiction & literature</h3>
      <div className="row">
        {props.fictionData.items.map((item) => {
          return <Item key={item.id} itemData={item} />;
        })}
      </div>
      <CommentContainer
        fictionData={props.fictionData}
        commentFieldText={props.commentFieldText}
        dispatch={props.dispatch}
      />
    </div>
  );
};

export default Fiction;
