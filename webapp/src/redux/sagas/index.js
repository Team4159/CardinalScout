import { fork, all, call } from "redux-saga/effects";
import login from "./auth";
import fb from "./fb";
import timer from "./timer";
export default function* rootSaga() {
  yield all([fork(login), call(timer), fork(fb)]);
}
