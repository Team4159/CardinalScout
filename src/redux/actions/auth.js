//@flow
import { createAction } from "redux-actions";

export const types = {
  LOGIN_REQUEST: "LOGIN_REQUEST",
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
  LOGOUT_REQUEST: "LOGOUT_REQUEST",
  SYNC_USER: "SYNC_USER"
};
export const loginRequest = createAction(types.LOGIN_REQUEST);
export const login = createAction(types.LOGIN, signInStatus => signInStatus);
export const logoutRequest = createAction(types.LOGOUT_REQUEST);
export const logout = createAction(types.LOGOUT, logoutStatus => logoutStatus);
export const syncUser = createAction(
  types.SYNC_USER,
  (user: Object): Object => ({ user })
);
