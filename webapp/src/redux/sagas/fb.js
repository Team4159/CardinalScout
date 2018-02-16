import { call, fork, all, select, takeEvery, put } from "redux-saga/effects";
import { delay } from "redux-saga";
import { types, syncData, syncTeams } from "../actions/fb";
import { reset } from "../actions/data";
import { message, showSnack } from "../actions/snack";
import getRsf from "../rsf";
function* saveNewData() {
  const { rsf } = yield call(getRsf);
  const user = yield select(state => state.auth.user);
  const newData = yield select(state => state.data);
  yield call(rsf.database.create, "data", {
    creator: user ? user.displayName : null,
    data: newData
  });
  yield put(reset());
  yield put(message("Data Successfully saved!"));
  yield put(showSnack());
  yield call(delay, 5000);
  yield put(showSnack());
}

function* syncDataSaga() {
  const { rsf } = yield call(getRsf);
  yield fork(rsf.database.sync, "data", {
    successActionCreator: syncData
  });
}
function* syncTeamsSaga() {
  const { rsf } = yield call(getRsf);
  yield fork(rsf.database.sync, "teams", {
    successActionCreator: syncTeams
  });
}
export default function* rootSaga() {
  yield all([
    fork(syncTeamsSaga),
    fork(syncDataSaga),
    takeEvery(types.DATA_NEW_SAVE, saveNewData)
  ]);
}
