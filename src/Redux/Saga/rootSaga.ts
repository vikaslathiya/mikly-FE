import { all, takeEvery } from "redux-saga/effects";
import {
  GET_LOGIN_REQUEST,
  LOG_OUT_REQUEST,
  USER_SIGN_UP_REQUEST,
} from "../Actions/loginAction";
import { LoginSaga, LogOutSaga, SignUpSaga } from "./authSaga";

function* rootSagas() {
  yield all([
    takeEvery(GET_LOGIN_REQUEST, LoginSaga),
    takeEvery(LOG_OUT_REQUEST, LogOutSaga),
    takeEvery(USER_SIGN_UP_REQUEST, SignUpSaga),
  ]);
}

export default rootSagas;
