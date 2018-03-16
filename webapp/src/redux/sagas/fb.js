import { call, fork, all, select, takeEvery, put } from "redux-saga/effects";
import { delay } from "redux-saga";
import { types, syncTeams } from "../actions/fb";
import { reset } from "../actions/data";
import { resetUltra } from "../actions/ultra";
import { resetPitScout } from "../actions/pitscout";
import { message, showSnack } from "../actions/snack";
import getRsf from "../rsf";
function* saveNewData() {
  const online = yield select(state => state.network.online);
  if (online) {
    const { rsf } = yield call(getRsf);
    const user = yield select(state => state.auth.user);
    const newData = yield select(state => state.data);
    yield call(rsf.database.create, "teams/" + newData.team + "/data", {
      creator: user ? user.displayName : null,
      data: newData
    });
    yield put(reset());
    yield put(message("Data Successfully saved!"));
    yield put(showSnack());
    yield call(delay, 5000);
    yield put(showSnack());
  }
}
function* saveNewUltra() {
  const online = yield select(state => state.network.online);
  if (online) {
    const { rsf } = yield call(getRsf);
    const user = yield select(state => state.auth.user);
    const newUltra = yield select(state => state.ultra);
    yield call(rsf.database.create, "teams/" + newUltra.team + "/ultra", {
      creator: user ? user.displayName : null,
      data: newUltra
    });
    yield put(resetUltra());
    yield put(message("Ultra Data Successfully Saved!!!!!"));
    yield put(showSnack());
    yield call(delay, 5000);
    yield put(showSnack());
  }
}
function* saveNewPitScout() {
  const online = yield select(state => state.network.online);
  if (online) {
    const { rsf } = yield call(getRsf);
    const user = yield select(state => state.auth.user);
    const newPitScout = yield select(state => state.pitscout);
    yield call(rsf.database.create, "teams/" + newPitScout.team + "/pitscout", {
      creator: user ? user.displayName : null,
      data: newPitScout
    });
    yield put(resetPitScout());
    yield put(message("PitScout Data Successfully Saved!!!!!"));
    yield put(showSnack());
    yield call(delay, 5000);
    yield put(showSnack());
  }
}
function* syncTeamsSaga() {
  const { rsf } = yield call(getRsf);
  const syncOn = yield select(state => state.fb.syncOn);
  if (!syncOn) {
    yield fork(rsf.database.sync, "teams", {
      successActionCreator: syncTeams
    });
  }
}
function* uploadTeamImage(action) {
  const { rsf } = yield call(getRsf);
  const filePath = "teams/" + action.payload.team;
  let urls = [];
  for (let i = 0; i < action.payload.files.length; i++) {
    let task = rsf.storage.uploadFile(
      filePath + "/" + i,
      action.payload.files[i]
    );

    yield task;
    const fileURL = yield call(rsf.storage.getDownloadURL, filePath + "/" + i);
    urls.push(fileURL);
  }
  yield call(rsf.database.update, filePath + "/imageUrls", urls);
}
export default function* rootSaga() {
  yield all([
    fork(syncTeamsSaga),
    takeEvery(types.DATA_NEW_SAVE, saveNewData),
    takeEvery(types.ULTRA_NEW_SAVE, saveNewUltra),
    takeEvery(types.SAVE_TEAM_IMAGE, uploadTeamImage),
    takeEvery(types.PITSCOUT_NEW_SAVE, saveNewPitScout)
  ]);
}
