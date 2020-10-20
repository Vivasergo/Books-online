import React from "react";
import { addCommentCreator, handleCommentChangeCreator } from "../../../../Redux/categoryReducer";
import Comment from "./Comment";

const CommentContainer = (props) => {

  const handleCommentChange = (event) => {
    props.dispatch(handleCommentChangeCreator(event))
  };

   const addComment = (commentText) => {
    props.dispatch(addCommentCreator(commentText));
  };
console.log(props.commentFieldText);

  return (
    <Comment fictionData={props.fictionData} addComment={addComment} handleCommentChange={handleCommentChange} commentFieldText={props.commentFieldText} />
  );
};

export default CommentContainer;
