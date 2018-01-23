import { delay } from "redux-saga";
import { put, take, actionChannel, race, call } from "redux-saga/effects";
import { tick, types } from "../actions/func.js";

function* runTimer() {
  const channel = yield actionChannel(types.START);
  while (yield take(channel)) {
    while (true) {
      const w = yield race({
        stopped: take(types.STOP),
        tick: call(delay, 1000)
      });
      if (!w.stopped) {
        yield put(tick());
      } else {
        break;
      }
    }
  }
}
export default runTimer;
