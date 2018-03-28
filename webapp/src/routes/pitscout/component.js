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
const PitScout = ({
  teams,
  pitscout,
  pitTeam,
  robotWeight,
  driverExp,
  driveTrainType,
  backWallClimb,
  minRungHeight,
  pitscoutNewSave,
  fields
}) => (
  <div className={styles.pitscout}>
    <h1>PitScouting</h1>
    <h2>Team Number:</h2>
    <TextField
      className="mdc-theme--secondary-bg"
      box
      value={pitscout.team}
      onChange={e => pitTeam(e.target.value)}
    />
    <h1>Robot questions</h1>
    <h2>Drivetrain type + max speed:</h2>
    <text>example: WestCoast / 15f/s</text>
    <TextField
      onChange={e => driveTrainType(e.target.value)}
      className="mdc-theme--secondary-bg"
      box
      value={pitscout.driveTrainType}
    />
    <h2>Robot weight:</h2>
    <TextField
      onChange={e => robotWeight(e.target.value)}
      className="mdc-theme--secondary-bg"
      box
      value={pitscout.robotWeight}
    />
    <div>
      <h2>Driver Experience:</h2>
      <FormField className="mdc-theme--secondary">
        <Radio
          onChange={() => driverExp(0)}
          id="year 1"
          name="driver experience"
          checked={pitscout.driverExp === 0}
        />
        <label for="year 1">First Year</label>
      </FormField>
      <FormField className="mdc-theme--secondary">
        <Radio
          onChange={() => driverExp(1)}
          checked={pitscout.driverExp === 1}
          id="year 2"
          name="driver experience"
        />
        <label for="year 2">Second Year</label>
      </FormField>
      <FormField
        onChange={() => driverExp(3)}
        checked={pitscout.driverExp === 3}
        className="mdc-theme--secondary"
      >
        <Radio id="year 3" name="driver experience" />
        <label for="year 3">Third+ Years</label>
      </FormField>
    </div>
    <h3>where do you intake/outake from?</h3>
    <TextField
      onChange={e => fields("intakeOutake", e.target.value)}
      className="mdc-theme--secondary-bg"
      box
      value={pitscout.intakeOutake ? pitscout.intakeOutake : null}
    />
    <h2>Vault?</h2>
    <Switch
      onClick={() => fields("vault", pitscout.vault ? !pitscout.vault : true)}
      checked={pitscout.vault ? pitscout.vault : false}
    />
    <h2>Switch?</h2>
    <Switch
      onClick={() =>
        fields("switch", pitscout.switch ? !pitscout.switch : true)
      }
      checked={pitscout.switch ? pitscout.switch : false}
    />
    <h3>how high can you stack cubes?</h3>
    <TextField
      onChange={e => fields("cubeStack", e.target.value)}
      className="mdc-theme--secondary-bg"
      box
      value={pitscout.cubeStack ? pitscout.cubeStack : null}
    />
    <h3>careful placement?</h3>
    <TextField
      onChange={e => fields("carefulPlacement", e.target.value)}
      className="mdc-theme--secondary-bg"
      box
      value={pitscout.carefulPlacement ? pitscout.carefulPlacement : null}
    />
    <h2>Scale</h2>
    <Switch
      onClick={() => fields("scale", pitscout.scale ? !pitscout.scale : true)}
      checked={pitscout.scale ? pitscout.scale : false}
    />
    <h3>How high can you stack?</h3>
    <TextField
      onChange={e => fields("cubeStackScale", e.target.value)}
      className="mdc-theme--secondary-bg"
      box
      value={pitscout.cubeStackScale ? pitscout.cubeStackScale : null}
    />
    <h3>Careful Placement?</h3>
    <TextField
      onChange={e => fields("carefulPlacementScale", e.target.value)}
      className="mdc-theme--secondary-bg"
      box
      value={
        pitscout.carefulPlacementScale ? pitscout.carefulPlacementScale : null
      }
    />
    <h2>Climb</h2>
    <Switch
      onClick={() => fields("climb", pitscout.climb ? !pitscout.climb : true)}
      checked={pitscout.climb ? pitscout.climb : false}
    />
    <h3>Can you climb from our robot?</h3>
    <Switch
      onClick={() =>
        fields(
          "climbOffOurBot",
          pitscout.climbOffOurBot ? !pitscout.climbOffOurBot : true
        )
      }
      checked={pitscout.climbOffOurBot ? pitscout.climbOffOurBot : false}
    />
    <h3>Buddy Climb</h3>
    <text> format: "passive" or "active" or "none"</text>
    <TextField
      onChange={e => fields("buddyClimbStyle", e.target.value)}
      className="mdc-theme--secondary-bg"
      box
      value={pitscout.buddyClimbStyle ? pitscout.buddyClimbStyle : null}
    />

    <div className={styles.button}>
      <Button
        onClick={pitscoutNewSave}
        raised
        className={styles["css-prop-override"]}
      >
        Submit
      </Button>
    </div>
  </div>
);
export default PitScout;
