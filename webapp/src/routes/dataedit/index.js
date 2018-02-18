//@flow
import { connect } from "react-redux";
import { saveNewData } from "../../redux/actions/fb";
import { edit } from "../../redux/actions/data";
import { push } from "react-router-redux";
import DataEdit from "./component";
const mDTP = dispatch => ({
  onSubmit: () => {
    dispatch(saveNewData());
    dispatch(push("/"));
  },
  edit: (type, changes) => dispatch(edit(type, changes))
});
export default connect(
  state => ({
    d: state.data
  }),
  mDTP
)(DataEdit);
