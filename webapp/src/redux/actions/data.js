//@flow
import { createAction } from "redux-actions";

export const types = {
  CROSS: "CROSS",
  TEAM: "TEAM",
  MATCH: "MATCH",
  POSITION: "POSITION",
  SCALE_AUTO: "SCALE_AUTON",
  SWITCH_AUTO: "SWITCH_AUTO",
  SCALE_TELE: "SCALE_TELE",
  SWITCH_TELE: "SWITCH_TELE",
  VAULT_TELE: "VAULT_TELE",
  FIELD: "FIELD",
  PYRAMID: "PYRAMID",
  PORTAL: "PORTAL",
  FAIL_SCALE: "FAIL_SCALE",
  FAIL_SWITCH: "FAIL_SWITCH",
  FAIL_VAULT: "FAIL_VAULT",
  PICKUP: "PICKUP",
  ATTEMPT_CLIMB: "ATTEMPT_CLIMB",
  ROBOT_DEAD_TIME: "ROBOT_DEAD_TIME",
  CLIMB: "CLIMB",
  EDIT: "EDIT",
  RESET: "RESET_DATA"
};

export const cross = createAction(types.CROSS, (cross: boolean) => ({ cross }));
export const team = createAction(types.TEAM, (team: number) => ({ team }));
export const match = createAction(types.MATCH, (match: number) => ({ match }));
export const position = createAction(
  types.POSITION,
  (type: string, pos: number) => ({
    pos,
    type
  })
);
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
export const vaultTele = createAction(types.VAULT_TELE, (o: Object) => ({
  seconds: o.seconds,
  pickedUpFrom: o.type
}));
export const failScale = createAction(types.FAIL_SCALE);
export const failSwitch = createAction(types.FAIL_SWITCH);
export const failVault = createAction(types.FAIL_VAULT);
export const pickup = createAction(types.PICKUP, (value: number) => ({
  value
}));
export const climb = createAction(types.CLIMB);
export const attemptClimb = createAction(types.ATTEMPT_CLIMB);
export const robotDeadTime = createAction(
  types.ROBOT_DEAD_TIME,
  (seconds: number) => ({
    seconds
  })
);
export const edit = createAction(types.EDIT, (type: string, changes: any) => ({
  type,
  changes
}));
export const reset = createAction(types.RESET);
