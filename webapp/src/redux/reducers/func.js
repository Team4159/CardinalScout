import { types } from "../actions/func";
import { handleActions } from "redux-actions";
const intialState = {
  status: "Stopped",
  seconds: 0,
  lastTimeRecorded: 0,
  pickedUpFrom: "",
  inBetweenRun: false,
  activeTab: 0,
  robotDead: false
};
const funcReducer = handleActions(
  {
    [types.START]: state => ({ ...state, status: "Running" }),
    [types.STOP]: state => ({ ...state, status: "Stopped" }),
    [types.TICK]: state => ({ ...state, seconds: state.seconds + 1 }),
    [types.RESET]: state => ({ ...state, seconds: 0 }),
    [types.RECORD]: (state, action) => ({
      ...state,
      lastTimeRecorded: action.payload.seconds,
      pickedUpFrom: action.payload.pickedUpFrom
    }),
    [types.IN_BETWEEN_RUN]: (state, action) => ({
      ...state,
      inBetweenRun: !state.inBetweenRun
    }),
    [types.ACTIVE_TAB]: (state, action) => ({
      ...state,
      activeTab: action.payload.tab
    }),
    [types.ROBOT_DEAD]: (state, action) => ({
      ...state,
      robotDead: !state.robotDead,
      lastTimeRecorded: action.payload.seconds
    })
  },
  intialState
);

export default funcReducer;
