//@flow
import { createAction } from "redux-actions";

export const types = {
  FORCE: "FORCE",
  LEVITATE: "LEVITATE",
  BOOST: "BOOST"
};

export const force = createAction(types.FORCE, (seconds: number) => ({
  seconds
}));
export const levitate = createAction(types.LEVITATE, (seconds: number) => ({
  seconds
}));
export const boost = createAction(types.BOOST, (seconds: number) => ({
  seconds
}));
