import Viewer from "./component";
import { connect } from "react-redux";
import { createSelector } from "reselect";
import { dataToArray } from "../../../util";
const viewerSelector = createSelector(
  [state => state.fb.dataList, (state, props) => props.match.params.id],
  (data, id) => dataToArray(data).filter(d => d.id === id)
);
const mSTP = (state, props) => ({
  data: viewerSelector(state, props)
});
export default connect(mSTP)(Viewer);
