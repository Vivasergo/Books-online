const SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA";

let initialState = {
  id: null,
  email: null,
  login: null,
  isLogged: false,
  fullName: null,
  smallPhoto: null
};

let authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
      return {
        ...state,
        ...action.userData,
        isLogged: true,
      };

    default:
      return state;
  }
};

export const setAuthUserData = (userData) => {
  return {
    type: SET_AUTH_USER_DATA,
    userData,
  };
};

export default authReducer;
