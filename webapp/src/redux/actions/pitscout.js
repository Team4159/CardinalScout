import { createAction } from "redux-actions";

export const types = {
  PIT_TEAM: "PIT_TEAM"
};
export const pitTeam = createAction(types.PIT_TEAM, team => ({ team }));
