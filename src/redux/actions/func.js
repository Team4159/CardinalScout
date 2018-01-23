//@flow
import { createAction } from "redux-actions";

export const types = {
  START: "START",
  STOP: "STOP",
  TICK: "TICK",
  RESET: "RESET",
  RECORD: "RECORD"
};
export const start = createAction(types.START);
export const stop = createAction(types.STOP);
export const tick = createAction(types.TICK);
export const reset = createAction(types.RESET);
export const record = createAction(types.RECORD, (seconds: number): Object => ({
  seconds
}));
