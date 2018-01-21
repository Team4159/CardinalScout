import { handleActions } from "redux-actions";
import { types } from "../actions/header.js";

const initialState = {
  drawerState: false
};
const headerReducer = handleActions(
  {
    [types.DRAWER]: (state, action) => ({
      drawerState: action.payload.drawerState
    })
  },
  initialState
);

export default headerReducer;
