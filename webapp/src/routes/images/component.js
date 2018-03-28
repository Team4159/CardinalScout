import { h } from "preact";
import Button from "preact-material-components/Button";
import "preact-material-components/Button/style.css";
import TextField from "preact-material-components/TextField";
import "preact-material-components/TextField/style.css";
import styles from "../pitscout/style.scss";
const Images = ({ saveNewTeamImage, team, teams, pitTeam }) => {
  let input = null;
  function onClick() {
    input.click();
  }
  function onChange(event) {
    saveNewTeamImage(team, event.target.files);
  }
  return (
    <div className={styles.pitscout}>
      <input
        type="file"
        ref={i => {
          input = i;
        }}
        onChange={onChange}
        className={styles.input}
        multiple
      />
      <TextField
        box
        className="mdc-theme--secondary-bg"
        value={team}
        onChange={e => pitTeam(e.target.value)}
      />
      <Button
        className={styles["css-prop-override"]}
        onClick={onClick}
        raised
        disabled={!teams.includes(team)}
      >
        Upload files
      </Button>
    </div>
  );
};

export default Images;
