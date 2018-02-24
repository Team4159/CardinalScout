import { h } from "preact";
import style from "./style.scss";
import Button from "preact-material-components/Button";
import Radio from "preact-material-components/Radio";
import FormField from "preact-material-components/FormField";
import "preact-material-components/FormField/style.css";
import "preact-material-components/Radio/style.css";
import "preact-material-components/Switch/mdc-switch";
import "preact-material-components/Button/mdc-button";
import Switch from "preact-material-components/Switch";
import Timer from "../../components/timer";
const changeToTeleop = (seconds, push) => {
  if (seconds === 15) {
    push("/teleop");
    return null;
  }
  return null;
};

const Auto = ({
  crossAction,
  robotStartingPosition,
  scaleStartingPosition,
  switchStartingPosition,
  crossed,
  seconds,
  scaleAuto,
  switchAuto,
  position,
  push
}) => (
  <div className={style.auto}>
    <Timer seconds={seconds} />
    <h1> Auto </h1>
    <div>
      <h2>Robot Starting Position</h2>
      <FormField className="mdc-theme--secondary">
        <Radio
          id="left"
          name="robot-starting-position"
          onClick={() => position("robotStartingPosition", 0)}
          checked={robotStartingPosition === 0}
        />
        <label for="left">Left</label>
      </FormField>
      <FormField className="mdc-theme--secondary">
        <Radio
          id="center"
          name="robot-starting-position"
          onClick={() => position("robotStartingPosition", 1)}
          checked={robotStartingPosition === 1}
        />
        <label for="center">Center</label>
      </FormField>
      <FormField className="mdc-theme--secondary">
        <Radio
          id="right"
          name="robot-starting-position"
          onClick={() => position("robotStartingPosition", 2)}
          checked={robotStartingPosition === 2}
        />
        <label for="right">Right</label>
      </FormField>
    </div>
    <div>
      <h2>Switch Starting Position</h2>
      <div className={style.wrapper}>
        <FormField className="mdc-theme--secondary">
          <Radio
            id="left"
            name="switch-starting-position"
            onClick={() => position("switchStartingPosition", 0)}
            checked={switchStartingPosition === 0}
          />
          <label for="left">Left</label>
        </FormField>
        <FormField className="mdc-theme--secondary">
          <Radio
            id="right"
            name="switch-starting-position"
            onClick={() => position("switchStartingPosition", 1)}
            checked={switchStartingPosition === 1}
          />
          <label for="right">Right</label>
        </FormField>
      </div>
    </div>
    <div>
      <h2>Scale Starting Position</h2>
      <div className={style.wrapper}>
        <FormField className="mdc-theme--secondary">
          <Radio
            id="left"
            name="scale-starting-position"
            onClick={() => position("scaleStartingPosition", 0)}
            checked={scaleStartingPosition === 0}
          />
          <label for="left">Left</label>
        </FormField>
        <FormField className="mdc-theme--secondary">
          <Radio
            id="right"
            name="scale-starting-position"
            onClick={() => position("scaleStartingPosition", 1)}
            checked={scaleStartingPosition === 1}
          />
          <label for="right">Right</label>
        </FormField>
      </div>
    </div>
    <div className={style.h1}>
      <h2>Crossed?</h2>
    </div>
    <div className={style.switch}>
      <Switch
        className={style.override}
        onClick={() => crossAction(!crossed)}
        checked={crossed}
      />
    </div>
    <div className={style.wrapper}>
      <div className={style.pair}>
        <div className={style.image}>
          <img
            src="../../assets/images/switchicon.png"
            height="30"
            width="30"
          />
        </div>
        <div className={style.button}>
          <Button
            onClick={() => switchAuto(seconds)}
            stroked
            className={style["css-prop-override"]}
          >
            Box into switch
          </Button>
        </div>
      </div>
    </div>
    <div className={style.wrapper}>
      <div className={style.pair}>
        <div className={style.image}>
          <img src="../../assets/images/scaleicon.png" height="30" width="30" />
        </div>
        <div className={style.button}>
          <Button
            onClick={() => scaleAuto(seconds)}
            stroked
            className={style["css-prop-override"]}
          >
            Box into scale
          </Button>
        </div>
      </div>
    </div>
    {changeToTeleop(seconds, push)}
  </div>
);
export default Auto;
