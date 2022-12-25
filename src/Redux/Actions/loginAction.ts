export const GET_LOGIN_REQUEST: any = "GET_LOGIN_REQUEST";
export const GET_LOGIN_SUCCESS = "GET_LOGIN_SUCCESS";
export const GET_LOGIN_FAILED = "GET_LOGIN_FAILED";

export const LOG_OUT_REQUEST: any = "LOG_OUT_REQUEST";
export const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";
export const LOG_OUT_FAILED = "LOG_OUT_FAILED";

export const USER_SIGN_UP_REQUEST: any = "USER_SIGN_UP_REQUEST";
export const USER_SIGN_UP_SUCCESS = "USER_SIGN_UP_SUCCESS";
export const USER_SIGN_UP_FAILED = "USER_SIGN_UP_FAILED";

export interface ILogin {
  role: string;
  username: string;
  password: string;
}

export interface ISignUp {
  username: string;
  password: string;
  name: string;
  phone: number;
  role: string;
}

export const LoginAction = (data: ILogin) => {
  return { type: GET_LOGIN_REQUEST, payload: data };
};

export const LogOutAction = () => {
  return { type: LOG_OUT_REQUEST };
};

export const SignUpAction = (data: ISignUp) => {
  return { type: USER_SIGN_UP_REQUEST, payload: data };
};
