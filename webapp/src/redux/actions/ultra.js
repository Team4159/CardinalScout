//@flow
import { createAction } from "redux-actions";

export const types = {
  FORCE: "FORCE",
  LEVITATE: "LEVITATE",
  BOOST: "BOOST",
  BOOST_LEVEL: "BOOST_LEVEL",
  FORCE_LEVEL: "FORCE_LEVEL",
  LEVITATE_LEVEL: "LEVITATE_LEVEL",
  RANK: "RANK",
  ULTRA_TEAM: "ULTRA_TEAM",
  ULTRA_MATCH: "ULTRA_MATCH",
  TEAM_COMMENTS: "TEAM_COMMENTS",
  RESET_ULTRA: "RESET_ULTRA"
};
export const ultraTeam = createAction(
  types.ULTRA_TEAM,
  (team: string, index: number) => ({
    team,
    index
  })
);
export const ultraMatch = createAction(types.ULTRA_MATCH, (match: string) => ({
  match
}));
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
export const teamComment = createAction(
  types.TEAM_COMMENTS,
  (team: string, comment: string) => ({ team, comment })
);
export const boostLevel = createAction(types.BOOST_LEVEL, lvl => ({ lvl }));
export const forceLevel = createAction(types.FORCE_LEVEL, lvl => ({ lvl }));
export const levitateLevel = createAction(types.LEVITATE_LEVEL, lvl => ({ lvl }))
export const resetUltra = createAction(types.RESET_ULTRA);
