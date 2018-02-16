import { h } from "preact";
import style from "./style.scss";
import Button from "preact-material-components/Button";
import "preact-material-components/TextField/style.css";
import TextField from "preact-material-components/TextField";
import "preact-material-components/Button/style.css";
import { route } from "preact-router";
const Match = ({ onTeamChange, onMatchChange, startTimer }) => (
  <div class={style.match}>
    <h1> Match</h1>
    <TextField
      className="mdc-theme--secondary-bg"
      onChange={t => onTeamChange(t.target.value)}
      label="Team Number"
      box
    />
    <TextField
      className="mdc-theme--secondary-bg"
      onChange={t => onMatchChange(t.target.value)}
      label="Match Number"
      box
    />
    <Button
      onClick={() => {
        startTimer();
        route("/auto");
      }}
      raised
    >
      Start Match (Standard Scout)
    </Button>
  </div>
);
export default Match;
