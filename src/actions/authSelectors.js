import { createSelector } from "reselect";

export function isAuthenticated(state) {
  return state.auth.authenticated;
}
//meomoized selectors
export const getAuth = createSelector(
  state => state.auth,
  auth => auth.toJS()
);
