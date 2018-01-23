//@flow
import { types } from "../actions/func";
import { handleActions } from "redux-actions";
const intialState = {
  status: "Stopped",
  seconds: 0
};
const funcReducer = handleActions(
  {
    [types.START]: state => ({ ...state, status: "Running" }),
    [types.STOP]: state => ({ ...state, status: "Stopped" }),
    [types.TICK]: state => ({ ...state, seconds: state.seconds + 1 }),
    [types.RESET]: state => ({ ...state, seconds: 0 })
  },
  intialState
);

export default funcReducer;
