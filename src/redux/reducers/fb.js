import { handleActions } from "redux-actions";
import { types } from "../actions/fb";
const initialState = {
  dataList: []
};

const reducer = handleActions(
  {
    [types.DATA_SYNC]: (state, action) => ({
      ...state,
      dataList: [...action.payload.data]
    })
  },
  initialState
);
export default reducer;
