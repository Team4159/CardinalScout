//@flow
import { h } from "preact";
import { connect } from "react-redux";
import { team, match } from "../../redux/actions/data";
import { start, reset } from "../../redux/actions/func";
import { push } from "react-router-redux";
import Match from "./component";

const mSTP = state => ({
  team: state.data.team,
  match: state.data.match,
  disabled: false
});
const mDTP = dispatch => ({
  onTeamChange: text => dispatch(team(parseInt(text, 10))),
  onMatchChange: text => dispatch(match(parseInt(text, 10))),
  startTimer: () => dispatch(start()),
  push: path => dispatch(push(path)),
  reset: () => {
    dispatch(reset());
  }
});

export default connect(mSTP, mDTP)(Match);
