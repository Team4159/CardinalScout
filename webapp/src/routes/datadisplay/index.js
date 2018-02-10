import { connect } from "react-redux";
import { saveNewData } from "../../redux/actions/fb";
import { reset } from "../../redux/actions/data";
import { route } from "preact-router";
import DataDisplay from "./component";
const mDTP = dispatch => ({
  onSubmit: () => {
    dispatch(saveNewData());
    dispatch(reset());
    route("/");
  }
});
export default connect(
  state => ({
    d: state.data
  }),
  mDTP
)(DataDisplay);
