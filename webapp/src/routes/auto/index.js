//@flow
import Auto from "./component";
import {
  cross,
  scaleAuto,
  switchAuto,
  position
} from "../../redux/actions/data";
import { connect } from "react-redux";
import { push } from "react-router-redux";
const mDTP = dispatch => ({
  crossAction: c => dispatch(cross(c)),
  position: (type, pos) => dispatch(position(type, pos)),
  switchAuto: s => dispatch(switchAuto(parseInt(s, 10))),
  scaleAuto: s => dispatch(scaleAuto(parseInt(s, 10))),
  push: route => dispatch(push(route))
});
const mSTP = state => ({
  crossed: state.data.cross,
  switchStartingPosition: state.data.switchStartingPosition,
  scaleStartingPosition: state.data.scaleStartingPosition,
  robotStartingPosition: state.data.robotStartingPosition,
  seconds: state.func.seconds
});

export default connect(mSTP, mDTP)(Auto);
