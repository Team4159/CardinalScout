import { createAction } from "redux-actions";

export const types = {
  DATA_SYNC: "DATA_SYNC",
  DATA_NEW_CHANGE: "DATA_NEW_CHANGE",
  DATA_NEW_SAVE: "DATA_NEW_SAVE",
  TEAMS_SYNC: "TEAMS_SYNC",
  ULTRA_NEW_CHANGE: "ULTRA_NEW_CHANGE",
  ULTRA_NEW_SAVE: "ULTRA_NEW_SAVE",
  ULTRA_SYNC: "ULTRA_SYNC",
  SAVE_TEAM_IMAGE: "SAVE_TEAM_IMAGE",
  GET_TEAM_IMAGES: "GET_TEAM_IMAGES",
  SYNC_TEAM_IMAGES: "SYNC_TEAM_IMAGES",
  TURN_OFF_SYNC: "TURN_OFF_SYNC",
  PITSCOUT_NEW_SAVE: "PITSCOUT_NEW_SAVE"
};
export const syncData = createAction(types.DATA_SYNC, data => ({ data }));
export const changeNewData = createAction(types.DATA_NEW_CHANGE, data => ({
  data
}));
export const saveNewData = createAction(types.DATA_NEW_SAVE);
export const syncTeams = createAction(types.TEAMS_SYNC, teams => ({ teams }));
export const syncUltra = createAction(types.ULTRA_SYNC, ultra => ({ ultra }));
export const saveNewUltra = createAction(types.ULTRA_NEW_SAVE);
export const changeNewUltra = createAction(types.ULTRA_NEW_CHANGE, ultra => ({
  ultra
}));
export const saveNewTeamImage = createAction(
  types.SAVE_TEAM_IMAGE,
  (team, files) => ({ team, files })
);
export const getTeamImages = createAction(types.GET_TEAM_IMAGES, team => ({
  team
}));
export const syncTeamImages = createAction(types.SYNC_TEAM_IMAGES, images => ({
  images
}));
export const turnOffSync = createAction(types.TURN_OFF_SYNC);
export const pitscoutNewSave = createAction(types.PITSCOUT_NEW_SAVE);
