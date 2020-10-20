const SEND_CONTACT_FORM = "SEND-CONTACT-FORM";

const initialState = {};

const chatReducer = (state = initialState, action) => {
  if (action.type === SEND_CONTACT_FORM) {
    alert(action.inputText);
  }

  return state;
};

export const sendContactFormCreator = (data) => {
  return {
    type: SEND_CONTACT_FORM,
    inputText: data,
  };
};

export default chatReducer;
