//@flow
import { connect } from "react-redux";
import {
  force,
  levitate,
  boost,
  forceLevel,
  boostLevel,
  levitateLevel
} from "../../redux/actions/ultra";
import { push } from "react-router-redux";
import Ultra from "./component";
import { stop, reset } from "../../redux/actions/func";
const mDTP = dispatch => ({
  forcePower: seconds => dispatch(force(seconds)),
  levitatePower: seconds => dispatch(levitate(seconds)),
  boostPower: seconds => dispatch(boost(seconds)),
  forceLevel: lvl => dispatch(forceLevel(lvl)),
  boostLevel: lvl => dispatch(boostLevel(lvl)),
  levitateLevel: lvl => dispatch(levitateLevel(lvl)),
  onNextPress: () => {
    dispatch(stop());
    dispatch(reset());
    dispatch(push("/ultraforms"));
  }
});
const mSTP = state => ({
  seconds: state.func.seconds,
  teams: state.ultra.teams,
  forceDisabled: state.ultra.forceTime !== null,
  boostDisabled: state.ultra.boostTime !== null,
  levitateDisabled: state.ultra.levitateTime !== null
});

export default connect(mSTP, mDTP)(Ultra);
