import { call, fork, all, select, takeEvery } from "redux-saga/effects";
import { types, syncData } from "../actions/fb";
import getRsf from "../rsf";
function* saveNewData() {
  const { rsf } = yield call(getRsf);
  const user = yield select(state => state.auth.user);
  const newData = yield select(state => state.data);
  yield call(rsf.database.create, "data", {
    creator: user ? user.displayName : null,
    data: newData
  });
}

function* syncDataSaga() {
  const { rsf } = yield call(getRsf);
  yield fork(rsf.database.sync, "data", {
    successActionCreator: syncData
  });
}

export default function* rootSaga() {
  yield all([fork(syncDataSaga), takeEvery(types.DATA_NEW_SAVE, saveNewData)]);
}
