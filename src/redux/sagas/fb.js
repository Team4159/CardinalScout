import { call, fork, all, select, takeEvery } from "redux-saga/effects";
import { types, syncData } from "../actions/fb";
import rsf from "../rsf";
function* saveNewData() {
  const user = yield select(state => state.auth.user);
  const newData = { hello: "hello", world: "world" };

  yield call(rsf.database.create, "data", {
    creator: user ? user.uid : null,
    data: newData
  });
}

function* syncDataSaga() {
  yield fork(rsf.database.sync, "data", {
    successActionCreator: syncData
  });
}

export default function* rootSaga() {
  yield all([fork(syncDataSaga), takeEvery(types.DATA_NEW_SAVE, saveNewData)]);
}
