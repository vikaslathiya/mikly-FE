import { all, takeEvery } from "redux-saga/effects";
import { GET_LOGIN_REQUEST } from "../Actions/loginAction";
import { LoginSaga } from "./authSaga";

function* rootSagas() {
  yield all([takeEvery(GET_LOGIN_REQUEST, LoginSaga)]);
}

export default rootSagas;
