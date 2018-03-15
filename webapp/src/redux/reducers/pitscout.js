//@flow
import { types } from "../actions/pitscout";
import { handleActions } from "redux-actions";

const initialState = {
  team: ""
};

const reducer = handleActions(
  {
    [types.PIT_TEAM]: (state, action) => ({
      ...state,
      team: action.payload.team
    })
  },
  initialState
);

export default reducer;
