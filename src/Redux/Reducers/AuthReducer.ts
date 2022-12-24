import {
  GET_LOGIN_FAILED,
  GET_LOGIN_REQUEST,
  GET_LOGIN_SUCCESS,
} from "../Actions/loginAction";

const initialState = {
  loading: false,
};

const loginReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_LOGIN_REQUEST:
      return {
        loading: true,
      };

    case GET_LOGIN_SUCCESS:
      return {
        loading: false,
      };

    case GET_LOGIN_FAILED:
      return {
        loading: false,
      };

    default:
      return state;
  }
};

export default loginReducer;
