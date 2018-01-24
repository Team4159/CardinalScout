//@flow
import { types } from "../actions/data";
import { handleActions } from "redux-actions";
const intialState = {
  cross: false
};
const dataReducer = handleActions(
  {
    [types.CROSS]: (state, action) => ({
      ...state,
      cross: action.payload.cross
    })
  },
  intialState
);

export default dataReducer;
