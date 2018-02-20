//@flow
import { types } from "../actions/ultra";
import { handleActions } from "redux-actions";

const intialState = {
  forceTime: null,
  levitateTime: null,
  boostTime: null,
  driverSkill: {}
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
    })
  },
  intialState
);

export default ultraDataReducer;
