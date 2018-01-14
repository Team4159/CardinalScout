import { put, call, take, fork } from "redux-saga/effects";
import { constants } from "../config";
import { firebaseAuth } from "../firebase";
import { auth } from "../actions";
function* signIn(authProvider) {
  try{
    const authData = yield call([firebaseAuth], authProvider);
    yield put(auth.signInFulfilled(authData.user));
  }
  catch(error){
    yield put(auth.signInFailed(error));
  }
}


//watchers
function* watchSignIn() {
  while(true){
    let { payload } = yield take(constants.SIGN_IN);
    yield fork(signIn, payload.authProvider);
  }
}

const authSagas = [
  fork(watchSignIn)
];
export default authSagas;
