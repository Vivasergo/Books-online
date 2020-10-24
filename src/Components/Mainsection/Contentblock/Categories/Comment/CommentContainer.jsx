import React from "react";
import { connect } from "react-redux";
import { addCommentCreator, handleCommentChangeCreator } from "../../../../../Redux/categoryReducer";
import Comment from "./Comment";

let mapStateToProps = (state) => {
  return {
    categoryComments: state.categories.fiction.categoryComments,
    commentFieldText: state.categories.fiction.commentFieldText
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    handleCommentChange: (value) => {
      dispatch(handleCommentChangeCreator(value))
    },
    addComment: (commentText) =>{
      dispatch(addCommentCreator(commentText))
    }
  };
};

const CommentContainer = connect(mapStateToProps, mapDispatchToProps)(Comment);

export default CommentContainer;
