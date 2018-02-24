import { createAction } from "redux-actions";

export const types = {
  DATA_SYNC: "DATA_SYNC",
  DATA_NEW_CHANGE: "DATA_NEW_CHANGE",
  DATA_NEW_SAVE: "DATA_NEW_SAVE",
  TEAMS_SYNC: "TEAMS_SYNC",
  ULTRA_NEW_CHANGE: "ULTRA_NEW_CHANGE",
  ULTRA_NEW_SAVE: "ULTRA_NEW_SAVE",
  ULTRA_SYNC: "ULTRA_SYNC"
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
