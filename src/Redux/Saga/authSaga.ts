import { call, put } from "redux-saga/effects";
import axios from "../../axiosConfig";
import { GET_LOGIN_FAILED, GET_LOGIN_SUCCESS } from "../Actions/loginAction";

interface LoginAction {
  payload: {
    role: string;
    username: string;
    password: string;
  };
}

export function* LoginSaga(action: LoginAction): unknown {
  try {
    const response = yield call(axios.post, "users/login", action.payload);

    if (response?.status === 200) {
      yield put({
        type: GET_LOGIN_SUCCESS,
        // payload: action.payload,
      });
      // yield put({
      //   type: TOAST_SHOW,
      //   payload: { message: 'Login Successfully!', severity: 'Success', show: true },
      // });
    }
  } catch (e) {
    yield put({ type: GET_LOGIN_FAILED });
    //   yield put({
    //     type: TOAST_SHOW,
    //     payload: { message: 'Something Went wrong please try again', severity: 'Danger', show: true },
    //   });
  }
}
