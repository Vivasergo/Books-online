import React from "react";
import { connect } from "react-redux";
import Fiction from "./Fiction";

let mapStateToProps = (state) => {
  return {
    fictionData: state.categories.fiction,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {};
};

const FictionContainer = connect(mapStateToProps, mapDispatchToProps)(Fiction);

export default FictionContainer;
