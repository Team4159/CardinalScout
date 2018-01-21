//@flow
import { createAction } from "redux-actions";

export const types = {
  DRAWER: "DRAWER"
};
export const drawer = createAction(
  types.DRAWER,
  (drawerState: boolean): Object => ({ drawerState })
);
