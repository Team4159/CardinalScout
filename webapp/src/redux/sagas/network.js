import {
  takeLatest,
  takeEvery,
  call,
  put,
  all,
  select
} from "redux-saga/effects";
import { delay } from "redux-saga";
import getRsf from "../rsf";
import { types, offlineCache, clearCache } from "../actions/network";
import { types as fbTypes } from "../actions/fb";
import { reset } from "../actions/data";
import { resetUltra } from "../actions/ultra";
import { resetPitScout } from "../actions/pitscout";
import { message, showSnack } from "../actions/snack";
function* uploadOfflineData(action) {
  const { rsf } = yield call(getRsf);
  const user = yield select(state => state.auth.user);
  if (action.payload.online && user) {
    const data = yield select(state => state.network.cache.data);
    const ultra = yield select(state => state.network.cache.ultra);
    const pitscout = yield select(state => state.network.cache.pitscout);
    try {
      for (let d of data) {
        yield call(rsf.database.create, "teams/" + d.team + "/data", {
          creator: user ? user.displayName : null,
          data: d
        });
      }
      for (let u of ultra) {
        yield call(rsf.database.create, "teams/" + u.team + "/ultra", {
          creator: user ? user.displayName : null,
          data: u
        });
      }
      for (let p of pitscout) {
        yield call(rsf.database.create, "teams/" + p.team + "/pitscout", {
          creator: user ? user.displayName : null,
          data: p
        });
      }
      yield put(clearCache());
    } catch (e) {
      console.log(e);
    }
  }
}

function* cacheData(action) {
  const online = yield select(state => state.network.online);
  if (!online) {
    switch (action.type) {
      case fbTypes.DATA_NEW_SAVE:
        {
          const newData = yield select(state => state.data);
          yield put(offlineCache(newData, "data"));
          yield put(reset());
          yield put(reset());
          yield put(message("Data(offline) Successfully saved!"));
          yield put(showSnack());
          yield call(delay, 5000);
          yield put(showSnack());
        }
        break;
      case fbTypes.ULTRA_NEW_SAVE:
        {
          const newUltra = yield select(state => state.ultra);
          yield put(offlineCache(newUltra, "ultra"));
          yield put(resetUltra());
          yield put(reset());
          yield put(message("Ultra Data(offline) Successfully saved!"));
          yield put(showSnack());
          yield call(delay, 5000);
          yield put(showSnack());
        }
        break;
      case fbTypes.PITSCOUT_NEW_SAVE: {
        const newPitScout = yield select(state => state.pitscout);
        yield put(offlineCache(newPitScout, "pitscout"));
        yield put(resetPitScout());
        yield put(message("pitscout Data(offline) Successfully saved!"));
        yield put(showSnack());
        yield call(delay, 5000);
        yield put(showSnack());
      }
    }
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest(types.NETWORK_STATUS_CHANGED, uploadOfflineData),
    takeEvery(fbTypes.DATA_NEW_SAVE, cacheData),
    takeEvery(fbTypes.ULTRA_NEW_SAVE, cacheData),
    takeEvery(fbTypes.PITSCOUT_NEW_SAVE, cacheData)
  ]);
}
