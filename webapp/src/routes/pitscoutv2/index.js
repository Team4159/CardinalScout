//@flow
import { connect } from "react-redux";
import { fields, pitTeam } from "../../redux/actions/pitscout";
import { saveNewTeamImage, pitscoutNewSave } from "../../redux/actions/fb";
import { push } from "react-router-redux";
import PitScout from "./component";

const mSTP = state => ({
  pitscout: state.pitscout,
  teams: state.fb.teams ? Object.keys(state.fb.teams) : [],
  online: state.network.online
});
const mSTD = dispatch => ({
  fields: (field, value) => dispatch(fields(field, value)),
  pitTeam: team => dispatch(pitTeam(team)),
  saveNewTeamImage: (team, files) => dispatch(saveNewTeamImage(team, files)),
  pitscoutNewSave: () => {
    dispatch(push("/"));
    dispatch(pitscoutNewSave());
  }
});
export default connect(mSTP, mSTD)(PitScout);
