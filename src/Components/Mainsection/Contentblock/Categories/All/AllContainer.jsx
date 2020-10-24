import React from "react";
import { connect } from "react-redux";
import All from "./All";

let mapStateToProps = (state) => {
  return {
    allData: state.categories.all,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {};
};

const AllContainer = connect(mapStateToProps, mapDispatchToProps)(All);

export default AllContainer;
