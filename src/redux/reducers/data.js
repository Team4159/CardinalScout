//@flow
import { types } from "../actions/data";
import { handleActions } from "redux-actions";
const intialState = {
  cross: false,
  team: null,
  match: null,
  scaleAuto: null,
  switchAuto: null,
  pyramid: [],
  field: [],
  portal: [],
  scaleTele: [],
  switchTele: [],
  vault: [],
  pickupRating: null
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
    [types.SCALE_AUTO]: (state, action) => ({
      ...state,
      scaleAuto: action.payload.seconds
    }),
    [types.SWITCH_AUTO]: (state, action) => ({
      ...state,
      switchAuto: action.payload.seconds
    }),
    [types.SCALE_TELE]: (state, action) => ({
      ...state,
      scaleTele: action.payload.seconds
    }),
    [types.SWITCH_TELE]: (state, action) => ({
      ...state,
      switchTele: action.payload.seconds
    })
  },
  intialState
);

export default dataReducer;
