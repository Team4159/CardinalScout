//@flow
import { connect } from "react-redux";
import TeamList from "./component";
import { createSelector } from "reselect";
import { push } from "react-router-redux";
const listSelector = createSelector(
  state => state.fb.teams,
  listObj => (listObj ? Object.keys(listObj) : null)
);
const mSTP = state => ({
  list: listSelector(state)
});
const mDTP = dispatch => ({
  push: route => dispatch(push(route))
});
export default connect(mSTP, mDTP)(TeamList);
