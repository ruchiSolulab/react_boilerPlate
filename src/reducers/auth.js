import * as actions from "../constants/actionTypes";
export const INITIAL_STATE = {
  email: "",
  password: "",
  authUser: localStorage.getItem("userToken")
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case actions.LOGIN_EMAIL_CHANGED:
      return {
        ...state,
        email: action.payload
      };

    case actions.LOGIN_PASSWORD_CHANGED:
      return {
        ...state,
        password: action.payload
      };

    case actions.LOGIN_REQUEST_SUCCESS:
      return {
        ...state,
        authUser: action.payload
      }
    default:
      return state;
  }
};
