//@flow
import PitScout from "./component.js";
import { pitscoutNewSave } from "../../redux/actions/fb";
import * as actions from "../../redux/actions/pitscout";
import { push } from "react-router-redux";
import { connect } from "react-redux";

const mSTP = state => ({
  pitscout: state.pitscout,
  teams: state.fb.teams ? Object.keys(state.fb.teams) : [],
  online: state.network.online
});
const mDTP = dispatch => ({
  pitTeam: team => dispatch(actions.pitTeam(team)),
  robotWeight: weight => dispatch(actions.robotWeight(weight)),
  driverExp: exp => dispatch(actions.driverExp(exp)),
  driveTrainType: type => dispatch(actions.driveTrainType(type)),
  backWallClimb: () => dispatch(actions.backWallClimb()),
  minRungHeight: height => dispatch(actions.minRungHeight(height)),
  fields: (type, data) => dispatch(actions.fields(type, data)),
  pitscoutNewSave: () => {
    dispatch(push("/"));
    dispatch(pitscoutNewSave());
  }
});
export default connect(mSTP, mDTP)(PitScout);
