//@flow
import { createAction } from "redux-actions";

export const types = {
  CROSS: "CROSS"
};

export const cross = createAction(types.CROSS, (cross: boolean) => ({ cross }));
