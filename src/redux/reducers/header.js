import { handleActions } from "redux-actions";
import { types } from "../actions/header.js";

const initialState = {
  headerState: false
};
const headerReducer = handleActions(
  {
    [types.HEADER]: (state, action) => ({
      headerState: action.payload.headerState
    })
  },
  initialState
);

export default headerReducer;
