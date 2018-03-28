//@flow
import { types } from "../actions/data";
import { handleActions } from "redux-actions";
const intialState = {
  cross: false,
  team: null,
  match: null,
  robotStartingPosition: null,
  switchStartingPosition: null,
  scaleStartingPosition: null,
  scaleAuto: [],
  switchAuto: [],
  scaleTele: [],
  switchTele: [],
  vaultTele: [],
  pickupRating: 3,
  robotDeadTime: 0,
  attemptClimb: false,
  climb: false,
  attemptCubeAuto: false
};
const dataReducer = handleActions(
  {
    [types.CROSS]: (state, action) => ({
      ...state,
      cross: action.payload.cross
    }),
    [types.TEAM]: (state, action) => ({
      ...state,
      team: action.payload.team
    }),
    [types.MATCH]: (state, action) => ({
      ...state,
      match: action.payload.match
    }),
    [types.POSITION]: (state, action) => ({
      ...state,
      [action.payload.type]: action.payload.pos
    }),
    [types.SCALE_AUTO]: (state, action) => ({
      ...state,
      scaleAuto: [...state.scaleAuto, action.payload.seconds]
    }),
    [types.SWITCH_AUTO]: (state, action) => ({
      ...state,
      switchAuto: [...state.switchAuto, action.payload.seconds]
    }),
    [types.SCALE_TELE]: (state, action) => ({
      ...state,
      scaleTele: [...state.scaleTele, action.payload]
    }),
    [types.SWITCH_TELE]: (state, action) => ({
      ...state,
      switchTele: [...state.switchTele, action.payload]
    }),
    [types.VAULT_TELE]: (state, action) => ({
      ...state,
      vaultTele: [...state.vaultTele, action.payload]
    }),
    [types.FAIL_SCALE]: (state, action) => ({
      ...state,
      failScale: state.failScale ? state.failScale + 1 : 1
    }),
    [types.FAIL_SWITCH]: (state, action) => ({
      ...state,
      failSwitch: state.failSwitch ? state.failSwitch + 1 : 1
    }),
    [types.FAIL_VAULT]: (state, action) => ({
      ...state,
      failVault: state.failVault ? state.failVault + 1 : 1
    }),
    [types.PICKUP]: (state, action) => ({
      ...state,
      pickupRating: action.payload.value
    }),
    [types.ROBOT_DEAD_TIME]: (state, action) => ({
      ...state,
      robotDeadTime: state.robotDeadTime + action.payload.seconds
    }),
    [types.ATTEMPT_CLIMB]: state => ({
      ...state,
      attemptClimb: !state.attemptClimb
    }),
    [types.CLIMB]: state => ({
      ...state,
      climb: !state.climb
    }),
    [types.EDIT]: (state, action) => ({
      ...state,
      [action.payload.type]: action.payload.changes
    }),
    [types.RESET]: (state, action) => intialState
  },
  intialState
);

export default dataReducer;
