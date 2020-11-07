import React from "react";
import Axios from "axios";
import Profile from "./Profile";
import { connect } from "react-redux";
import { setUserProfile } from "../../../../../Redux/profileReducer";
import { withRouter } from "react-router-dom";

class ProfCont extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) userId = "2";

    Axios.get(
      `https://social-network.samuraijs.com/api/1.0/profile/${userId}`
    ).then((response) => {
      this.props.setUserProfile(response.data);
    });
  }

  render() {
    return <Profile {...this.props} />;
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.userProfile.profile,
  };
};

let WithURLContainerComponent = withRouter(ProfCont);

let ProfileContainer = connect(mapStateToProps, { setUserProfile })(
  WithURLContainerComponent
);

export default ProfileContainer;
