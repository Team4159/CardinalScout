//@flow
import { createAction } from "redux-actions";
export const types = {
  NETWORK_STATUS_CHANGED: "NETWORK_STATUS_CHANGED"
};
export const networkStatusChanged = createAction(
  types.NETWORK_STATUS_CHANGED,
  online => ({
    online
  })
);
