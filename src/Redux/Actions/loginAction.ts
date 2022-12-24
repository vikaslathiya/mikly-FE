export const GET_LOGIN_REQUEST: any = "GET_LOGIN_REQUEST";
export const GET_LOGIN_SUCCESS = "GET_LOGIN_RSUCCESS";
export const GET_LOGIN_FAILED = "GET_LOGIN_RFAILED";

export interface ILogin {
  role: string;
  username: string;
  password: string;
}

export const LoginAction = (data: ILogin) => {
  return { type: GET_LOGIN_REQUEST, payload: data };
};
