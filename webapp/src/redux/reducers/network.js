//@flow
import { types } from "../actions/network";
import { handleActions } from "redux-actions";
const initialState = {
  online: null
};
export default handleActions(
  {
    [types.NETWORK_STATUS_CHANGED]: (state, action) => ({
      ...state,
      online: action.payload.online
    })
  },
  initialState
);
