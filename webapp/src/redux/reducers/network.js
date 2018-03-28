//@flow
import { types } from "../actions/network";
import { handleActions } from "redux-actions";
const initialState = {
  online: null,
  cache: {
    data: [],
    ultra: [],
    pitscout: []
  }
};
export default handleActions(
  {
    [types.NETWORK_STATUS_CHANGED]: (state, action) => ({
      ...state,
      online: action.payload.online
    }),
    [types.OFFLINE_CACHE]: (state, action) => ({
      ...state,
      cache: {
        ...state.cache,
        [action.payload.type]: [
          ...state.cache[action.payload.type],
          action.payload.newData
        ]
      }
    }),
    [types.CLEAR_CACHE]: (state, action) => ({
      ...state,
      cache: initialState.cache
    })
  },
  initialState
);
