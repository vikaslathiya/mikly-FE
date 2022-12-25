import { call, put } from "redux-saga/effects";
import axios from "../../axiosConfig";
import {
  GET_LOGIN_FAILED,
  GET_LOGIN_SUCCESS,
  LOG_OUT_FAILED,
  LOG_OUT_SUCCESS,
  USER_SIGN_UP_FAILED,
  USER_SIGN_UP_SUCCESS,
} from "../Actions/loginAction";
import { SHOW_TOAST } from "../Actions/ToastAction";

interface LoginAction {
  payload: {
    role: string;
    username: string;
    password: string;
  };
}

interface SignUpAction {
  payload: {
    username: string;
    password: string;
    name: string;
    phone: number;
    role: string;
  };
}

export function* LoginSaga(action: LoginAction): unknown {
  try {
    const response = yield call(axios.post, "users/login", action.payload);
    const { status, data } = response;
    console.log("data", data);

    if (status === 200) {
      localStorage.setItem("token", data?.data?.token);
      yield put({
        type: GET_LOGIN_SUCCESS,
        payload: data?.data,
      });
      yield put({
        type: SHOW_TOAST,
        payload: {
          message: data?.message,
          severity: "success",
        },
      });
    }
  } catch (e: any) {
    yield put({ type: GET_LOGIN_FAILED });
    yield put({
      type: SHOW_TOAST,
      payload: { message: e?.response?.data?.message, severity: "error" },
    });
  }
}

export function* LogOutSaga(): unknown {
  try {
    localStorage.clear();
    yield put({
      type: LOG_OUT_SUCCESS,
    });
  } catch (e: any) {
    yield put({ type: LOG_OUT_FAILED });
  }
}

export function* SignUpSaga(action: SignUpAction): unknown {
  try {
    const response = yield call(axios.post, "users/sign-up", action.payload);
    const { status, data } = response;
    console.log("data", data);

    if (status === 200) {
      localStorage.setItem("token", data?.data?.token);
      yield put({
        type: USER_SIGN_UP_SUCCESS,
        payload: data?.data,
      });
      yield put({
        type: SHOW_TOAST,
        payload: {
          message: data?.message,
          severity: "success",
        },
      });
    }
  } catch (e: any) {
    yield put({ type: USER_SIGN_UP_FAILED });
    yield put({
      type: SHOW_TOAST,
      payload: { message: e?.response?.data?.message, severity: "error" },
    });
  }
}
