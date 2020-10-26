import React from "react";
import { connect } from "react-redux";
import { followTriggerAC } from "../../../../../Redux/usersReducer";

import Users from "./Users";

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.items
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    follow_trigger: (userId) => {
      dispatch(followTriggerAC(userId))
    }
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
  


export default UsersContainer;
