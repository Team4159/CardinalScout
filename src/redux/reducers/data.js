//@flow
import { types } from "../actions/data";
import { handleActions } from "redux-actions";
const intialState = {
  cross: false,
  team: null,
  match: null,
  scaleAuto: null,
  switchAuto: null,
  pyramid: 0,
  field: 0,
  portal: 0,
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
      scaleTele: [...state.scaleTele, action.payload]
    }),
    [types.SWITCH_TELE]: (state, action) => ({
      ...state,
      switchTele: [...state.scaleTele, action.payload]
    }),
    [types.FIELD]: (state, action) => ({
      ...state,
      field: state.field + 1
    }),
    [types.PYRAMID]: (state, action) => ({
      ...state,
      pyramid: state.pyramid + 1
    }),
    [types.PORTAL]: (state, action) => ({
      ...state,
      portal: state.portal + 1
    })
  },
  intialState
);

export default dataReducer;
