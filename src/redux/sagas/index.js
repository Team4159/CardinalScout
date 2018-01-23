import { fork, all, call } from "redux-saga/effects";
import login from "./auth";
import timer from "./timer";
export default function* rootSaga() {
  yield all([fork(login), call(timer)]);
}
