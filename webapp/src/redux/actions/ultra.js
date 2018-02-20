//@flow
import { createAction } from "redux-actions";

export const types = {
  FORCE: "FORCE",
  LEVITATE: "LEVITATE",
  BOOST: "BOOST",
  RANK: "RANK"
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
export const rank = createAction(
  types.RANK,
  (type: string, team: number, rank: number) => ({
    type,
    team,
    rank
  })
);
