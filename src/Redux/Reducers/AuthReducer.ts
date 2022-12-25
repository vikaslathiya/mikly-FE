import {
  GET_LOGIN_FAILED,
  GET_LOGIN_REQUEST,
  GET_LOGIN_SUCCESS,
  LOG_OUT_FAILED,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
  USER_SIGN_UP_FAILED,
  USER_SIGN_UP_SUCCESS,
} from "../Actions/loginAction";

const initialState = {
  loading: false,
  isLogin: false,
};

const loginReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case GET_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isLogin: true,
      };

    case GET_LOGIN_FAILED:
      return {
        ...state,
        loading: false,
        isLogin: false,
      };

    case LOG_OUT_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case LOG_OUT_SUCCESS:
      return {
        ...state,
        loading: false,
        isLogin: false,
      };

    case LOG_OUT_FAILED:
      return {
        ...state,
        loading: false,
        isLogin: true,
      };

    case USER_SIGN_UP_FAILED:
      return {
        ...state,
        loading: true,
      };

    case USER_SIGN_UP_SUCCESS:
      return {
        ...state,
        loading: false,
        isLogin: true,
      };

    case USER_SIGN_UP_FAILED:
      return {
        ...state,
        loading: false,
        isLogin: false,
      };

    default:
      return state;
  }
};

export default loginReducer;
