import { LOGIN_USER, LOGOUT_USER } from "../action/AuthAction";

const initialState = {
  loginDataLoading: false,
  loginDataResult: false,
  loginDataError: false,

  logoutLoading: false,
  logoutResult: false,
  logoutError: false,
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        loginDataLoading: action.payload.loading,
        loginDataResult: action.payload.data,
        loginDataError: action.payload.errorMessage,
      };
    case LOGOUT_USER:
      return {
        ...state,
        logoutLoading: action.payload.loading,
        logoutResult: action.payload.data,
        logoutError: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default AuthReducer;
