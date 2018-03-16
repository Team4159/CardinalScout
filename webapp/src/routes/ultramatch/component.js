import { h } from "preact";
import TextField from "preact-material-components/TextField";
import Button from "preact-material-components/Button";
import "preact-material-components/Button/style.css";
import "preact-material-components/TextField/style.css";
import style from "./style";

const containsTeam = (teams, list) => {
  for (let i = 0; i < teams.length; i++) {
    if (!Object.keys(list).includes(teams[i].toString())) return false;
  }
  return true;
};
const UltraMatch = ({
  ultraTeam,
  ultraMatch,
  teams,
  match,
  onNextClick,
  list
}) => (
  <div className={style.ultramatch}>
    <h1>Enter Matches and Teams</h1>
    <div className={style.textfields}>
      <TextField
        onChange={e => {
          if (!isNaN(e.target.value)) ultraMatch(e.target.value);
          else ultraMatch("");
        }}
        label="Enter Match"
        box
        value={match}
        className="mdc-theme--secondary-bg"
      />
      <TextField
        onChange={e => {
          if (!isNaN(e.target.value)) ultraTeam(e.target.value, 0);
          else ultraTeam("", 0);
        }}
        label="Enter Team"
        box
        className="mdc-theme--secondary-bg"
        value={teams[0]}
      />
      <TextField
        onChange={e => {
          if (!isNaN(e.target.value)) ultraTeam(e.target.value, 1);
          else ultraTeam("", 1);
        }}
        label="Enter Team"
        box
        className="mdc-theme--secondary-bg"
        value={teams[1]}
      />
      <TextField
        onChange={e => {
          if (!isNaN(e.target.value)) ultraTeam(e.target.value, 2);
          else ultraTeam("", 2);
        }}
        label="Enter Team"
        box
        className="mdc-theme--secondary-bg"
        value={teams[2]}
      />
    </div>
    <Button
      onClick={onNextClick}
      className="mdc-theme--secondary"
      raised
      disabled={!containsTeam(teams, list) || isNaN(match)}
    >
      Next
    </Button>
  </div>
);

export default UltraMatch;
