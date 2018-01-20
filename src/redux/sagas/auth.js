import firebase from "firebase";
import { call, fork, put, take, takeEvery, all } from "redux-saga/effects";

import { types, login, syncUser, logout } from "../actions/auth.js";

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
function* logoutSaga() {
  try {
    const data = yield call(rsf.auth.signOut);
    yield put(logout(data));
  } catch (error) {
    yield put(logout(error));
  }
}
function* syncUserSaga() {
  const channel = yield call(rsf.auth.channel);

  while (true) {
    const data = yield take(channel);
    
    if (data.user !== null) yield put(syncUser(data.user));
    else yield put(syncUser(null));
  }
}
export default function* loginRootSaga() {
  yield fork(syncUserSaga);
  yield all([
    takeEvery(types.LOGIN_REQUEST, loginSaga),
    takeEvery(types.LOGOUT_REQUEST, logoutSaga)
  ]);
}
