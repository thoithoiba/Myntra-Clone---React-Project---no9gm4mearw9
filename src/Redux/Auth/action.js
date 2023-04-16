import { LOGIN_SUCCESS, SIGN_UP_SUCCESS } from "./actionTypes";

const signupSuccess = () => {
  return {
    type: SIGN_UP_SUCCESS,
  };
};

const getSignupSuccess = (payload) => {
  return {
    type: LOGIN_SUCCESS,
    payload,
  };
};

export const SignUp = (firstName, lastName, Email, Password) => (dispatch) => {
  const payload = {
    firstName,
    lastName,
    Email,
    Password,
  };


}