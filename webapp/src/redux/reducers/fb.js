import { handleActions } from "redux-actions";
import { types } from "../actions/fb";
const initialState = {
  dataList: {},
  teamsList: {},
  ultraList: {}
};

const reducer = handleActions(
  {
    [types.DATA_SYNC]: (state, action) => ({
      ...state,
      dataList: action.payload.data
    }),
    [types.TEAMS_SYNC]: (state, action) => ({
      ...state,
      teamsList: action.payload.teams
    }),
    [types.ULTRA_SYNC]: (state, action) => ({
      ...state,
      ultraList: action.payload.ultra
    })
  },
  initialState
);
export default reducer;
