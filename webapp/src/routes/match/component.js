import { h } from "preact";
import style from "./style.scss";
import Button from "preact-material-components/Button";
import "preact-material-components/TextField/style.css";
import TextField from "preact-material-components/TextField";
import "preact-material-components/Button/style.css";
const Match = ({
  onTeamChange,
  onMatchChange,
  startTimer,
  push,
  team,
  match,
  disabled
}) => (
  <div class={style.match}>
    <h1> Match</h1>
    <TextField
      className="mdc-theme--secondary-bg"
      onChange={t => {
        if (!isNaN(t.target.value)) onTeamChange(t.target.value);
      }}
      label="Team Number"
      value={team}
      box
    />
    <TextField
      className="mdc-theme--secondary-bg"
      onChange={t => {
        if (!isNaN(t.target.value)) onMatchChange(t.target.value);
      }}
      label="Match Number"
      value={match}
      box
    />
    <Button
      onClick={() => {
        startTimer();
        push("/auto");
      }}
      raised
      disabled={disabled || match === null || isNaN(match)}
    >
      Start Match (Standard Scout)
    </Button>
  </div>
);
export default Match;
