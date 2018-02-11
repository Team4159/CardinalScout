//@flow
import { createAction } from "redux-actions";
export const types = {
  SHOW_SNACK: "SHOW_SNACK",
  MESSAGE: "MESSAGE"
};

export const showSnack = createAction(types.SHOW_SNACK);
export const message = createAction(types.MESSAGE, (message: string) => ({
  message
}));
