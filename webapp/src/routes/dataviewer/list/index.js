import Viewer from "./component";
import { connect } from "react-redux";
import { createSelector } from "reselect";
import { dataToArray, sortByKey } from "../../../util";
const dataSelector = createSelector(
  state => state.fb.dataList,
  data => sortByKey("match", dataToArray(data))
);
const mSTP = state => ({
  data: dataSelector(state)
});
export default connect(mSTP, dispatch => ({}))(Viewer);
