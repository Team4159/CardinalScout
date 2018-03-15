//@flow
import Team from "./component";
import { connect } from "react-redux";
import { createSelector } from "reselect";
import { dataToArray } from "../../../util";
const getFbteam = (state, props) =>
  state.fb.teams ? state.fb.teams[props.match.params.team] : null;
const dataSelector = createSelector(
  [getFbteam],
  team => (team ? team.data : null)
);
const imageSelector = createSelector(
  getFbteam,
  data => (data ? data.imageUrls : null)
);
const mSTP = (state, props) => ({
  teamData: dataSelector(state, props),
  imageUrls: imageSelector(state, props)
});
const mDTP = state => ({});

export default connect(mSTP, mDTP)(Team);
