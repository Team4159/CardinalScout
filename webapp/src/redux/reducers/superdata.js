//@flow
import { types } from "../actions/superdata";
import { handleActions } from "redux-actions";

const intialState = {
  forceTime: null,
  levitateTime: null,
  boostTime: null
};
const superDataReducer = handleActions(
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
    })
  },
  intialState
);

export default superDataReducer;
