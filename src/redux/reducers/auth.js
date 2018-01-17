//@flow
import { types } from "../actions/auth";
import { handleActions } from "redux-actions";
const initalState = {
  loading: false,
  loggedIn: false,
  user: null
};

const reducer = handleActions(
  {
    [types.LOGIN_REQUEST]: (state, action) => ({
      loading: true
    }),
    [types.LOGIN]: {
      next(state, action) {
        return {
          ...state,
          loading: false,
          loggedIn: true
        };
      },
      throw(state, action) {
        console.log(action.payload);
        return {
          ...state,
          loading: false
        };
      }
    },
    [types.SYNC_USER]: (state, action) => ({
      ...state,
      loggedIn: action.user !== null,
      user: action.user
    })
  },
  initalState
);

export default reducer;
