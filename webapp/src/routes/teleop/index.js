//@flow
import { connect } from "react-redux";
import {
  types,
  scaleTele,
  switchTele,
  vaultTele,
  failScale,
  failSwitch,
  failVault,
  pickup,
  climb,
  attemptClimb,
  robotDeadTime
} from "../../redux/actions/data";
import Teleop from "./component";
import {
  record,
  stop,
  reset,
  inBetweenRun,
  robotDead
} from "../../redux/actions/func";
import { push } from "react-router-redux";
const mSTP = state => ({
  seconds: state.func.seconds,
  type: state.func.pickedUpFrom,
  difference: state.func.seconds - state.func.lastTimeRecorded,
  pickupRating: state.data.pickupRating,
  inBetweenRun: state.func.inBetweenRun,
  attemtedClimb: state.data.attemptClimb,
  climbed: state.data.climb,
  robotDead: state.func.robotDead
});
const mDTP = dispatch => ({
  handleField: seconds => {
    dispatch(record({ seconds, type: types.FIELD }));
    dispatch(inBetweenRun());
  },
  handlePyramid: seconds => {
    dispatch(record({ seconds, type: types.PYRAMID }));
    dispatch(inBetweenRun());
  },
  handlePortal: seconds => {
    dispatch(record({ seconds, type: types.PORTAL }));
    dispatch(inBetweenRun());
  },
  handleScale: (seconds, type) => {
    dispatch(scaleTele({ seconds, type }));
    dispatch(inBetweenRun());
  },
  handleSwitch: (seconds, type) => {
    dispatch(switchTele({ seconds, type }));
    dispatch(inBetweenRun());
  },
  handleVault: (seconds, type) => {
    dispatch(vaultTele({ seconds, type }));
    dispatch(inBetweenRun());
  },
  handleScaleFail: (seconds, type) => {
    dispatch(failScale({ seconds, type }));
    dispatch(inBetweenRun());
  },
  handleSwitchFail: (seconds, type) => {
    dispatch(failSwitch({ seconds, type }));
    dispatch(inBetweenRun());
  },
  handleVaultFail: (seconds, type) => {
    dispatch(failVault({ seconds, type }));
    dispatch(inBetweenRun());
  },
  pickup: value => {
    dispatch(pickup(value));
  },
  climb: () => dispatch(climb()),
  attemptClimb: () => dispatch(attemptClimb()),
  handleRobotDead: seconds => {
    dispatch(robotDead(seconds));
  },
  handleRobotDeadTime: seconds => {
    dispatch(robotDeadTime(seconds));
    dispatch(robotDead(0));
  },
  onSubmit: () => {
    dispatch(push("/dataedit"));
    dispatch(stop());
    dispatch(reset());
  }
});

export default connect(mSTP, mDTP)(Teleop);
