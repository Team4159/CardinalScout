import { handleActions } from "redux-actions";
import { types } from "../actions/fb";
const initialState = {
  dataList: [],
  teamsList: []
};

const reducer = handleActions(
  {
    [types.DATA_SYNC]: (state, action) => ({
      ...state,
      dataList: [...action.payload.data]
    }),
    [types.TEAMS_SYNC]: (state, action) => ({
      ...state,
      teamsList: [...action.payload.teams]
    })
  },
  initialState
);
export default reducer;
