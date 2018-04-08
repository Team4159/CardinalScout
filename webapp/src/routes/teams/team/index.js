import Team from "./component";
import { connect } from "react-redux";
import { createSelector } from "reselect";
import { dataToArray } from "../../../util";
import {
  calculateData,
  calculateTotalData,
  convertDataObjectToArray,
  calculateDriverSkill
} from "../../../calculations";
const getFbteam = (state, props) =>
  state.fb.teams ? state.fb.teams[props.match.params.team] : null;
const dataSelector = createSelector(
  [getFbteam],
  team =>
    typeof team.data === "object"
      ? dataToArray(team.data).map(data => ({
          ...data,
          data: calculateData(data.data)
        }))
      : null
);
const totalDataSelector = createSelector([getFbteam], team => ({
  ...calculateTotalData(convertDataObjectToArray(team.data)),
  meanDriverSkill: calculateDriverSkill(team.ultra)
}));
const imageSelector = createSelector(
  getFbteam,
  data => (data ? data.imageUrls : null)
);
const ultraDataSelector = createSelector(
  getFbteam,
  data => (data.ultra ? dataToArray(data.ultra) : null)
);
const pitScoutSelector = createSelector(
  getFbteam,
  data => (data.pitscout ? dataToArray(data.pitscout) : null)
);
const mSTP = (state, props) => ({
  totalData: totalDataSelector(state, props),
  data: dataSelector(state, props),
  imageUrls: imageSelector(state, props),
  ultraData: ultraDataSelector(state, props),
  pitscoutData: pitScoutSelector(state, props)
});
const mDTP = state => ({});

export default connect(mSTP, mDTP)(Team);
