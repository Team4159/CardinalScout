import { createAction } from "redux-actions";
import { constants } from "../config.js";
export const signIn = createAction(constants.AUTH, authProvider => authProvider);
