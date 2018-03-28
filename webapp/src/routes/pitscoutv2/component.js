import { h } from "preact";
import TextField from "preact-material-components/TextField";
import Button from "preact-material-components/Button";
import "preact-material-components/Button/style.css";
import "preact-material-components/TextField/style.css";
import style from "../pitscout/style.scss";
const PitScout = ({
  fields,
  pitscout,
  pitTeam,
  saveNewTeamImage,
  pitscoutNewSave,
  teams
}) => {
  let input = null;
  function onClick() {
    input.click();
  }
  function onChange(event) {
    saveNewTeamImage(pitscout.team, event.target.files);
  }
  return (
    <div className={style.pitscout}>
      <h1>Pitscout v2</h1>
      <h2>Team</h2>
      <TextField
        onChange={e => pitTeam(e.target.value)}
        className="mdc-theme--secondary-bg"
        box
        value={pitscout.team ? pitscout.team : null}
      />
      <h3>Climbing Method(also, ask if they can climb on our robot)</h3>
      <TextField
        onChange={e => fields("climbingMethod", e.target.value)}
        className="mdc-theme--secondary-bg"
        box
        value={pitscout.climbingMethod ? pitscout.climbingMethod : null}
      />
      <h3>Buddy Climb Method(only fill if they buddy climb)</h3>
      <TextField
        onChange={e => fields("buddyClimbMethod", e.target.value)}
        className="mdc-theme--secondary-bg"
        box
        value={pitscout.buddyClimbMethod ? pitscout.buddyClimbMethod : null}
      />
      <h3>DriveTrain Info</h3>
      <h4>format: Wheel number/Drive-train style/Lowest speed/Highest Speed</h4>
      <TextField
        onChange={e => fields("drivetrainInfo", e.target.value)}
        className="mdc-theme--secondary-bg"
        box
        value={pitscout.drivetrainInfo ? pitscout.drivetrainInfo : null}
      />
      <h3>Intake place(s):</h3>
      <TextField
        onChange={e => fields("intakePlaces", e.target.value)}
        className="mdc-theme--secondary-bg"
        box
        value={pitscout.intakePlaces ? pitscout.intakePlaces : null}
      />
      <h3>Outtake place(s):</h3>
      <TextField
        onChange={e => fields("outakePlaces", e.target.value)}
        className="mdc-theme--secondary-bg"
        box
        value={pitscout.outakePlaces ? pitscout.outakePlaces : null}
      />
      <h3>Outaking Method:</h3>
      <h4>short comment on accuracy</h4>
      <TextField
        onChange={e => fields("outakeMethods", e.target.value)}
        className="mdc-theme--secondary-bg"
        box
        value={pitscout.outakeMethods ? pitscout.outakeMethods : null}
      />
      <h3>Issues that you've had?</h3>
      <TextField
        onChange={e => fields("issues", e.target.value)}
        className="mdc-theme--secondary-bg"
        box
        value={pitscout.issues ? pitscout.issues : null}
      />
      <input
        type="file"
        ref={i => {
          input = i;
        }}
        onChange={onChange}
        className={style.input}
        multiple
      />
      <Button
        className={style["css-prop-override"]}
        onClick={onClick}
        raised
        disabled={!teams.includes(pitscout.team)}
      >
        Upload files
      </Button>
      <Button onClick={pitscoutNewSave}>Submit</Button>
    </div>
  );
};
export default PitScout;
