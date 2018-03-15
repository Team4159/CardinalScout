//@flow
import PitScout from "./component.js";
import { saveNewTeamImage } from "../../redux/actions/fb";
import { pitTeam } from "../../redux/actions/pitscout";
import { connect } from "react-redux";

const mSTP = state => ({
  team: state.pitscout.team,
  teamsList: Object.keys(state.fb.teamsList)
});
const mDTP = dispatch => ({
  saveNewTeamImage: (team, files) => dispatch(saveNewTeamImage(team, files)),
  pitTeam: team => dispatch(pitTeam(team))
});
export default connect(mSTP, mDTP)(PitScout);
