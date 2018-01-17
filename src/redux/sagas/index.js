import { fork } from "redux-saga/effects";
import login from "./auth";

export default function* rootSaga() {
  yield [fork(login)];
}
