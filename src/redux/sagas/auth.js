import { call, fork, put, take, takeEvery, all } from "redux-saga/effects";

import { types, login, syncUser, logout } from "../actions/auth.js";

import getRsf from "../rsf";

function* loginSaga() {
  try {
    const { auth, rsf } = yield call(getRsf);
    const authProvider = new auth.GoogleAuthProvider();
    const data = yield call(rsf.auth.signInWithPopup, authProvider);
    yield put(login(data));
  } catch (error) {
    yield put(login(error));
  }
}
function* logoutSaga() {
  try {
    const { rsf } = yield call(getRsf);
    const data = yield call(rsf.auth.signOut);
    yield put(logout(data));
  } catch (error) {
    yield put(logout(error));
  }
}
function* syncUserSaga() {
  const { rsf } = yield call(getRsf);
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
