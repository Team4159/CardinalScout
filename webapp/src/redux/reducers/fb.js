import { handleActions } from "redux-actions";
import { types } from "../actions/fb";
const initialState = {
  teams: null
};

const reducer = handleActions(
  {
    [types.TEAMS_SYNC]: (state, action) => ({
      ...state,
      teams: action.payload.teams
    })
  },
  initialState
);
export default reducer;
