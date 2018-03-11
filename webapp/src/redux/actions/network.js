//@flow
import { createAction } from "redux-actions";
export const types = {
  NETWORK_STATUS_CHANGED: "NETWORK_STATUS_CHANGED",
  OFFLINE_CACHE: "OFFLINE_CACHE",
  CLEAR_CACHE: "CLEAR_CACHE"
};
export const networkStatusChanged = createAction(
  types.NETWORK_STATUS_CHANGED,
  (online: boolean) => ({
    online
  })
);

//USAGE: newData has to be an Object that has the properties { type: String, data: Object }
export const offlineCache = createAction(
  types.OFFLINE_CACHE,
  (newData: Object, type: string) => ({
    newData,
    type
  })
);
export const clearCache = createAction(types.CLEAR_CACHE);
