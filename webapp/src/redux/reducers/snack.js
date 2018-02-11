//@flow
import { handleActions } from "redux-actions";
import { types } from "../actions/snack";
const initialState = {
  showSnack: false,
  message: null
};

const reducer = handleActions(
  {
    [types.SHOW_SNACK]: state => ({
      ...state,
      showSnack: !state.showSnack
    }),
    [types.MESSAGE]: (state, action) => ({
      ...state,
      message: action.payload.message
    })
  },
  initialState
);
export default reducer;
