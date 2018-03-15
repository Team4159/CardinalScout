import { h } from "preact";
import Button from "preact-material-components/Button";
import "preact-material-components/Button/style.css";
import TextField from "preact-material-components/TextField";
import "preact-material-components/TextField/style.css";
import FormField from "preact-material-components/FormField";
import Radio from "preact-material-components/Radio";
import Switch from "preact-material-components/Switch";
import "preact-material-components/Switch/style.css";
import "preact-material-components/FormField/style.css";
import "preact-material-components/Radio/style.css";
import styles from "./style.scss";
const PitScout = ({ teamsList, team, pitTeam, saveNewTeamImage }) => {
  let input = null;
  function onClick() {
    input.click();
  }
  function onChange(event) {
    saveNewTeamImage(team, event.target.files);
  }
  return (
    <div className={styles.pitscout}>
      <h1>PitScouting</h1>
      <h2>Team Number:</h2>
      <TextField
        className="mdc-theme--secondary-bg"
        box
        value={team}
        onChange={e => pitTeam(e.target.value)}
      />
      <h2>Drivetrain type:</h2>
      <TextField className="mdc-theme--secondary-bg" box />
      <h2>Robot weight:</h2>
      <TextField className="mdc-theme--secondary-bg" box />
      <div>
        <h2>Driver Experience:</h2>
        <FormField className="mdc-theme--secondary">
          <Radio id="year 1" name="driver experience" />
          <label for="year 1">First Year</label>
        </FormField>
        <FormField className="mdc-theme--secondary">
          <Radio id="year 2" name="driver experience" />
          <label for="year 2">Second Year</label>
        </FormField>
        <FormField className="mdc-theme--secondary">
          <Radio id="year 3" name="driver experience" />
          <label for="year 3">Third Year</label>
        </FormField>
      </div>
      <h2>Min rung height to climb:</h2>
      <TextField className="mdc-theme--secondary-bg" box />
      <h2>Do you need backwall to climb?</h2>
      <Switch />
      <h2>Add Images of Robot:</h2>
      <input
        type="file"
        ref={i => {
          input = i;
        }}
        onChange={onChange}
        className={styles.input}
        multiple
      />

      <Button
        className={styles["css-prop-override"]}
        onClick={onClick}
        raised
        disabled={!teamsList.includes(team)}
      >
        Upload files
      </Button>
      <div className={styles.button}>
        <Button raised className={styles["css-prop-override"]}>
          Submit
        </Button>
      </div>
    </div>
  );
};
export default PitScout;
