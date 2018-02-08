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
      className={style.textfield}
      onChange={t => onTeamChange(t.target.value)}
      label="Team Number"
    />
    <TextField
      className={style.textfield}
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
      Start Match (Standard Scout)
    </Button>
    <Button
      onClick={() => {
        startTimer();
        route("/super");
      }}
      raised
    >
      Start Match (Super Scout)
    </Button>
  </div>
);
export default Match;
