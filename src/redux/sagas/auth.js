import firebase from "firebase";
import { call, fork, put, take, takeEvery } from "redux-saga/effects";

import { types, login, syncUser } from "../actions/auth.js";

import rsf from "../rsf";

const authProvider = new firebase.auth.GoogleAuthProvider();

function* loginSaga() {
  try {
    const data = yield call(rsf.auth.signInWithPopup, authProvider);
    yield put(login(data));
  } catch (error) {
    yield put(login(error));
  }
}
function* syncUserSaga() {
  const channel = yield call(rsf.auth.channel);

  while (true) {
    const { user } = yield take(channel);
    if (user) yield put(syncUser(user));
    else yield put(syncUser(null));
  }
}
export default function* loginRootSaga() {
  yield fork(syncUserSaga);
  yield takeEvery(types.LOGIN_REQUEST, loginSaga);
}
