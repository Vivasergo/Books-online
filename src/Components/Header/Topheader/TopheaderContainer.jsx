import Axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { setAuthUserData } from "../../../Redux/authReducer";
import Topheader from "./Topheader";

class TopheaderContainer extends React.Component {
  componentDidMount() {
    Axios.get("https://social-network.samuraijs.com/api/1.0/auth/me", {
      withCredentials: true,
    }).then((response) => {
      if (response.data.resultCode === 0) {
        Axios.get(
          `https://social-network.samuraijs.com/api/1.0/profile/${response.data.data.id}`
        ).then((profileResponse) => {
          let responseData = {...response.data.data, ...profileResponse.data};
          this.props.setAuthUserData(responseData);
        });
        
      }
    });
  }

  render() {
    return (
      <>
        <Topheader {...this.props} />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    isLogged: state.auth.isLogged,
    fullName: state.auth.fullName,
    smallPhoto: state.auth.smallPhoto
  };
};

let WithURLTopheaderContainer = withRouter(TopheaderContainer);

export default connect(mapStateToProps, { setAuthUserData })(
  WithURLTopheaderContainer
);
