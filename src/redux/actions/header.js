//@flow
import { createActions } from "redux-actions";

export const types = {
  DRAWER: "DRAWER"
};
const headerActions = createActions({
  [types.DRAWER]: (drawerState: boolean): Object => ({ drawerState })
});

export default headerActions;
