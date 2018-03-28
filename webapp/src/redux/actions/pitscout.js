import { createAction } from "redux-actions";

export const types = {
  PIT_TEAM: "PIT_TEAM",
  ROBOT_WEIGHT: "ROBOT_WEIGHT",
  DRIVER_EXPERIENCE: "DRIVER_EXPERIENCE",
  DRIVETRAIN_TYPE: "DRIVETRAIN_TYPE",
  MIN_RUNG_HEIGHT: "MIN_RUNG_HEIGHT",
  BACKWALL_CLIMB: "BACKWALL_CLIMB",
  PITSCOUT_RESET: "PITSCOUT_RESET",
  FIELDS: "FIELDS"
};
export const pitTeam = createAction(types.PIT_TEAM, team => ({ team }));
export const robotWeight = createAction(types.ROBOT_WEIGHT, weight => ({
  weight
}));
export const driverExp = createAction(types.DRIVER_EXPERIENCE, exp => ({
  exp
}));
export const driveTrainType = createAction(types.DRIVETRAIN_TYPE, type => ({
  type
}));
export const backWallClimb = createAction(types.BACKWALL_CLIMB);
export const minRungHeight = createAction(types.MIN_RUNG_HEIGHT, height => ({
  height
}));
export const resetPitScout = createAction(types.PITSCOUT_RESET);
export const fields = createAction(types.FIELDS, (type, data) => ({
  type,
  data
}));
