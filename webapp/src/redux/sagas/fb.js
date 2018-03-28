import { call, fork, all, select, takeEvery, put } from "redux-saga/effects";
import { delay } from "redux-saga";
import { types, syncTeams, localSave } from "../actions/fb";
import { reset } from "../actions/data";
import { resetUltra } from "../actions/ultra";
import { resetPitScout } from "../actions/pitscout";
import { message, showSnack } from "../actions/snack";
import getRsf from "../rsf";
import uuid from "uuid/v4";
function* saveNewData() {
  const online = yield select(state => state.network.online);
  if (online) {
    const { rsf } = yield call(getRsf);
    const user = yield select(state => state.auth.user);
    const newData = yield select(state => state.data);
    try {
      yield call(rsf.database.create, "teams/" + newData.team + "/data", {
        creator: user ? user.displayName : null,
        data: newData
      });
      yield put(message("Data Successfully saved!"));
      yield put(showSnack());
      yield call(delay, 5000);
      yield put(showSnack());
    } catch (e) {
      console.log(e);
      yield put(message("Data Successfully saved!"));
      yield put(showSnack());
      yield call(delay, 5000);
      yield put(showSnack());
    }
    yield put(localSave("data", newData));
    yield put(reset());
  }
}
function* saveNewUltra() {
  const online = yield select(state => state.network.online);
  if (online) {
    const { rsf } = yield call(getRsf);
    const user = yield select(state => state.auth.user);
    const newUltra = yield select(state => state.ultra);
    try {
      yield call(rsf.database.create, "teams/" + newUltra.team + "/ultra", {
        creator: user ? user.displayName : null,
        data: newUltra
      });
      yield put(message("Ultra Data Successfully Saved!!!!!"));
      yield put(showSnack());
      yield call(delay, 5000);
      yield put(showSnack());
    } catch (error) {
      console.log(error);
      yield put(
        message(
          "Ultra Data Unsuccessfully Saved :( but don't worry, there's a localSave"
        )
      );
      yield put(showSnack());
      yield call(delay, 5000);
      yield put(showSnack());
    }
    yield put(localSave("ultra", newUltra));
    yield put(resetUltra());
  }
}
function* saveNewPitScout() {
  const online = yield select(state => state.network.online);
  if (online) {
    const { rsf } = yield call(getRsf);
    const user = yield select(state => state.auth.user);
    const newPitScout = yield select(state => state.pitscout);
    try {
      yield call(
        rsf.database.create,
        "teams/" + newPitScout.team + "/pitscout",
        {
          creator: user ? user.displayName : null,
          data: newPitScout
        }
      );
      yield put(message("PitScout Data Successfully Saved!!!!!"));
      yield put(showSnack());
      yield call(delay, 5000);
      yield put(showSnack());
    } catch (error) {
      console.log(error);
      yield put(
        message(
          "PitScout Data UNsuccessfully Saved, but Don't worry there's a localSave"
        )
      );
      yield put(showSnack());
      yield call(delay, 5000);
      yield put(showSnack());
    }
    yield put(localSave("pitscout", newPitScout));
    yield put(resetPitScout());
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
  try {
    for (let i = 0; i < action.payload.files.length; i++) {
      let task = rsf.storage.uploadFile(
        filePath + "/" + uuid(),
        action.payload.files[i]
      );

      yield task;
      const fileURL = yield call(
        rsf.storage.getDownloadURL,
        filePath + "/" + i
      );
      urls.push(fileURL);
    }
    yield call(rsf.database.update, filePath + "/imageUrls", urls);
    yield put(message("Image Successfully saved!!!"));
    yield put(showSnack());
    yield call(delay, 5000);
    yield put(showSnack());
  } catch (error) {
    yield call(rsf.database.update, filePath + "/imageUrls", urls);
    yield put(message("Image Unsuccessfully Saved :( Please try again"));
    yield put(showSnack());
    yield call(delay, 5000);
    yield put(showSnack());
  }
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
