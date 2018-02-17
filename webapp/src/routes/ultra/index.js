//@flow
import { connect } from "react-redux";
import { force, levitate, boost } from "../../redux/actions/superdata";

import Ultra from "./component";
const mDTP = dispatch => ({
  forcePower: seconds => dispatch(force(seconds)),
  levitatePower: seconds => dispatch(levitate(seconds)),
  boostPower: seconds => dispatch(boost(seconds))
});
const mSTP = state => ({
  seconds: state.func.seconds
});

export default connect(mSTP, mDTP)(Ultra);
