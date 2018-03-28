import Images from "./component";
import { connect } from "react-redux";
import { saveNewTeamImage } from "../../redux/actions/fb";
import { pitTeam } from "../../redux/actions/pitscout";
const mSTP = state => ({
  teams: state.fb.teams ? Object.keys(state.fb.teams) : [],
  team: state.pitscout.team,
  online: state.network.online
});
const mDTP = dispatch => ({
  saveNewTeamImage: (team, files) => dispatch(saveNewTeamImage(team, files)),
  pitTeam: team => dispatch(pitTeam(team))
});
export default connect(mSTP, mDTP)(Images);
