import { handleActions } from "redux-actions";
import { types } from "../actions/fb";
const initialState = {
  teams: null,
  syncOn: false
};

const reducer = handleActions(
  {
    [types.TEAMS_SYNC]: (state, action) => ({
      ...state,
      teams: action.payload.teams
    }),
    [types.TURN_OFF_SYNC]: state => ({
      ...state,
      syncOn: !state.syncOn
    })
  },
  initialState
);
export default reducer;
