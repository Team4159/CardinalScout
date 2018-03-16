//@flow
import PitScout from "./component.js";
import { saveNewTeamImage, pitscoutNewSave } from "../../redux/actions/fb";
import * as actions from "../../redux/actions/pitscout";
import { push } from "react-router-redux";
import { connect } from "react-redux";

const mSTP = state => ({
  pitscout: state.pitscout,
  teams: state.fb.teams ? Object.keys(state.fb.teams) : []
});
const mDTP = dispatch => ({
  saveNewTeamImage: (team, files) => dispatch(saveNewTeamImage(team, files)),
  pitTeam: team => dispatch(actions.pitTeam(team)),
  robotWeight: weight => dispatch(actions.robotWeight(weight)),
  driverExp: exp => dispatch(actions.driverExp(exp)),
  driveTrainType: type => dispatch(actions.driveTrainType(type)),
  backWallClimb: () => dispatch(actions.backWallClimb()),
  minRungHeight: height => dispatch(actions.minRungHeight(height)),
  pitscoutNewSave: () => {
    dispatch(push("/"));
    dispatch(pitscoutNewSave());
  }
});
export default connect(mSTP, mDTP)(PitScout);
