//@flow
import UltraMatch from "./component";
import { connect } from "react-redux";
import { ultraTeam, ultraMatch } from "../../redux/actions/ultra";
import { start } from "../../redux/actions/func";
import { push } from "react-router-redux";
const mSTP = state => ({
  teams: state.ultra.teams,
  match: state.ultra.match
});
const mDTP = dispatch => ({
  ultraTeam: (team, index) => dispatch(ultraTeam(team, index)),
  ultraMatch: match => dispatch(ultraMatch(match)),
  onNextClick: () => {
    dispatch(push("/ultra"));
    dispatch(start());
  }
});
export default connect(mSTP, mDTP)(UltraMatch);
