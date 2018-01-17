//@flow
import { createAction } from "redux-actions";

export const types = {
  LOGIN_REQUEST: "LOGIN_REQUEST",
  LOGIN: "LOGIN",
  SYNC_USER: "SYNC_USER"
};
export const loginRequest = createAction(types.LOGIN_REQUEST);
export const login = createAction(
  types.LOGIN,
  (signInStatus: any) => signInStatus
);
export const syncUser = createAction(types.SYNC_USER, (user: any): any => user);
