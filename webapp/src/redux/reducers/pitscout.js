//@flow
import { types } from "../actions/pitscout";
import { handleActions } from "redux-actions";

const initialState = {
  team: "",
  backwallClimb: false,
  scale: false,
  climb: false,
  vault: false,
  switch: false
};

const reducer = handleActions(
  {
    [types.PIT_TEAM]: (state, action) => ({
      ...state,
      team: action.payload.team
    }),
    [types.DRIVETRAIN_TYPE]: (state, { payload: { type } }) => ({
      ...state,
      driveTrainType: type
    }),
    [types.BACKWALL_CLIMB]: state => ({
      ...state,
      backWallClimb: !state.backWallClimb
    }),
    [types.MIN_RUNG_HEIGHT]: (state, { payload: { height } }) => ({
      ...state,
      minRungHeight: height
    }),
    [types.ROBOT_WEIGHT]: (state, { payload: { weight } }) => ({
      ...state,
      robotWeight: weight
    }),
    [types.DRIVER_EXPERIENCE]: (state, { payload: { exp } }) => ({
      ...state,
      driverExp: exp
    }),
    [types.PITSCOUT_RESET]: state => initialState,
    [types.FIELDS]: (state, { payload: { type, data } }) => ({
      ...state,
      [type]: data
    })
  },
  initialState
);

export default reducer;
