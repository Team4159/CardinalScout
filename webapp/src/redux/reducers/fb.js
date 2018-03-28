import { handleActions } from "redux-actions";
import { types } from "../actions/fb";
const initialState = {
  teams: null,
  syncOn: false,
  localSave: {
    ultra: [],
    data: [],
    pitsocut: []
  }
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
    }),
    [types.LOCAL_SAVE]: (state, { payload: { type, data } }) => ({
      ...state,
      localSave: {
        ...state.localSave,
        [type]: [data, ...state.localSave[type]]
      }
    }),
    RESET_SAVE: state => ({ ...state, localSave: initialState.localSave })
  },
  initialState
);
export default reducer;
