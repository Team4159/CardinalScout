import { h } from "preact";
import { connect } from "react-redux";
import { team, match } from "../../redux/actions/data";
import { start } from "../../redux/actions/func";
import { route } from "preact-router";
import style from "./style.css";
import Button from "preact-material-components/Button";
import "preact-material-components/TextField/style.css";
import TextField from "preact-material-components/TextField";
import "preact-material-components/Button/style.css";

const Match = ({ onTeamChange, onMatchChange, startTimer }) => (
  <div class={style.match}>
    <h1> Match</h1>
    <TextField
      onChange={t => onTeamChange(t.target.value)}
      label="Team Number"
    />
    <TextField
      onChange={t => onMatchChange(t.target.value)}
      label="Match Number"
    />
    <Button
      onClick={() => {
        startTimer();
        route("/auto");
      }}
      raised
    >
      Start Match
    </Button>
  </div>
);

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
