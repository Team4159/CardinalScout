import { h } from "preact";
import { connect } from "react-redux";
import { team, match } from "../../redux/actions/data";
import { start } from "../../redux/actions/func";
import Match from "./component";


const mSTP = state => ({
  team: state.data.team,
  match: state.data.match
});
const mDTP = dispatch => ({
  onTeamChange: text => dispatch(team(parseInt(text, 10))),
  onMatchChange: text => dispatch(match(parseInt(text, 10))),
  startTimer: () => dispatch(start())
});

export default connect(mSTP, mDTP)(Match);
