//@flow
import { createAction } from "redux-actions";

export const types = {
  CROSS: "CROSS",
  TEAM: "TEAM",
  MATCH: "MATCH",
  SCALE_AUTO: "SCALE_AUTON",
  SWITCH_AUTO: "SWITCH_AUTO",
  SCALE_TELE: "SCALE_TELE",
  SWITCH_TELE: "SWITCH_TELE",
  FIELD: "FIELD",
  PYRAMID: "PYRAMID",
  PORTAL: "PORTAL"
};

export const cross = createAction(types.CROSS, (cross: boolean) => ({ cross }));
export const team = createAction(types.TEAM, (team: number) => ({ team }));
export const match = createAction(types.MATCH, (match: number) => ({ match }));
export const switchAuto = createAction(
  types.SWITCH_AUTO,
  (seconds: number) => ({ seconds })
);
export const scaleAuto = createAction(types.SCALE_AUTO, (seconds: number) => ({
  seconds
}));
export const scaleTele = createAction(types.SCALE_TELE, (o: Object) => ({
  seconds: o.seconds,
  pickedUpFrom: o.type
}));
export const switchTele = createAction(types.SWITCH_TELE, (o: Object) => ({
  seconds: o.seconds,
  pickedUpFrom: o.type
}));
export const field = createAction(types.FIELD);
export const pyramid = createAction(types.PYRAMID);
export const portal = createAction(types.PORTAL);
