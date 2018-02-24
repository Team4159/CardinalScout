//@flow
import { types } from "../actions/ultra";
import { handleActions } from "redux-actions";

const intialState = {
  match: null,
  teams: [null, null, null],
  forceTime: null,
  levitateTime: null,
  boostTime: null,
  driverSkill: {},
  scaleControl: {},
  defense: {},
  switchControl: {},
  comments: {}
};
const ultraDataReducer = handleActions(
  {
    [types.FORCE]: (state, action) => ({
      ...state,
      forceTime: action.payload.seconds
    }),
    [types.LEVITATE]: (state, action) => ({
      ...state,
      levitateTime: action.payload.seconds
    }),
    [types.BOOST]: (state, action) => ({
      ...state,
      boostTime: action.payload.seconds
    }),
    [types.RANK]: (state, action) => ({
      ...state,
      [action.payload.type]: {
        ...state[action.payload.type],
        [action.payload.team]: action.payload.rank
      }
    }),
    [types.ULTRA_MATCH]: (state, action) => ({
      ...state,
      match: action.payload.match
    }),
    [types.TEAM_COMMENTS]: (state, action) => ({
      ...state,
      comments: {
        ...state.comments,
        [action.payload.team]: action.payload.comment
      }
    }),
    [types.ULTRA_TEAM]: (state, action) => ({
      ...state,
      teams: state.teams
        .slice(0, action.payload.index)
        .concat(
          action.payload.team,
          state.teams.slice(action.payload.index + 1)
        ),
      driverSkill: {
        ...state.driverSkill,
        [action.payload.team]: null
      },
      scaleControl: {
        ...state.scaleControl,
        [action.payload.team]: null
      },
      defense: {
        ...state.defense,
        [action.payload.team]: null
      },
      switchControl: {
        ...state.switchControl,
        [action.payload.team]: null
      },
      comments: {
        ...state.comments,
        [action.payload.team]: null
      }
    }),
    [types.RESET_ULTRA]: state => intialState
  },
  intialState
);

export default ultraDataReducer;
