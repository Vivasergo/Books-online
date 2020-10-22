import React from "react";
import { connect } from "react-redux";
import { sendContactFormCreator } from "../../../../Redux/chatReducer";
import Chat from "./Chat";

let mapStateToProps = (state) => {
  return {};
};

let mapDispatchToProps = (dispatch) => {
  return {
    sendCont: (textToSend) => {
      dispatch(sendContactFormCreator(textToSend))
    }
  };
};

const ChatContainer = connect(mapStateToProps, mapDispatchToProps)(Chat);
  


export default ChatContainer;
