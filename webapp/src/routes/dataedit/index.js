import { connect } from "react-redux";
import { saveNewData } from "../../redux/actions/fb";
import { push } from "react-router-redux";
import DataEdit from "./component";
const mDTP = dispatch => ({
  onSubmit: () => {
    dispatch(saveNewData());
    dispatch(push("/"));
  }
});
export default connect(
  state => ({
    d: state.data
  }),
  mDTP
)(DataEdit);
