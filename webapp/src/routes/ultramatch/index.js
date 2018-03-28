//@flow
import UltraMatch from "./component";
import { connect } from "react-redux";
import { ultraTeam, ultraMatch } from "../../redux/actions/ultra";
import { reset } from "../../redux/actions/func.js";
import { start } from "../../redux/actions/func";
import { push } from "react-router-redux";
const mSTP = state => ({
  teams: state.ultra.teams,
  match: state.ultra.match,
  list: state.fb.teams
});
const mDTP = dispatch => ({
  ultraTeam: (team, index) => dispatch(ultraTeam(team, index)),
  ultraMatch: match => dispatch(ultraMatch(match)),
  onNextClick: () => {
    dispatch(reset());
    dispatch(push("/ultra"));
    dispatch(start());
  }
});
export default connect(mSTP, mDTP)(UltraMatch);
