//@flow
import { connect } from "react-redux";
import {
  field,
  pyramid,
  portal,
  types,
  scaleTele,
  switchTele,
  vaultTele,
  failScale,
  failSwitch,
  failVault,
  failEpic,
  pickup
} from "../../redux/actions/data";
import Teleop from "./component";
import { record, stop, reset, inBetweenRun } from "../../redux/actions/func";
import { route } from "preact-router";

const mSTP = state => ({
  seconds: state.func.seconds,
  type: state.func.pickedUpFrom,
  difference: state.func.seconds - state.func.lastTimeRecorded,
  pickupRating: state.data.pickupRating,
  inBetweenRun: state.func.inBetweenRun
});
const mDTP = dispatch => ({
  handleField: seconds => {
    dispatch(record({ seconds, type: types.FIELD }));
    dispatch(inBetweenRun());
    dispatch(field());
  },
  handlePyramid: seconds => {
    dispatch(record({ seconds, type: types.PYRAMID }));
    dispatch(inBetweenRun());
    dispatch(pyramid());
  },
  handlePortal: seconds => {
    dispatch(record({ seconds, type: types.PORTAL }));
    dispatch(inBetweenRun());
    dispatch(portal());
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
  handleEpicFail: (seconds, type) => {
    dispatch(failEpic({ seconds, type }));
    dispatch(inBetweenRun());
  },
  pickup: value => {
    dispatch(pickup(value));
  },
  onSubmit: () => {
    route("/datadisplay");
    dispatch(stop());
    dispatch(reset());
  }
});

export default connect(mSTP, mDTP)(Teleop);
