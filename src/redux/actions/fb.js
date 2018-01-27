import { createAction } from "redux-actions";

export const types = {
  DATA_SYNC: "DATA_SYNC",
  DATA_NEW_CHANGE: "DATA_NEW_CHANGE",
  DATA_NEW_SAVE: "DATA_NEW_SAVE"
};
export const syncData = createAction(types.DATA_SYNC, data => ({ data }));
export const changeNewData = createAction(types.DATA_NEW_CHANGE, data => ({
  data
}));
export const saveNewData = createAction(types.DATA_NEW_SAVE);
