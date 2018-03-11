import { h } from "preact";
import Button from "preact-material-components/Button";
import "preact-material-components/Button/style.css";
import style from "./style.scss";
import Slider from "preact-material-components/Slider";
import Switch from "preact-material-components/Switch";
import "preact-material-components/Switch/mdc-switch.scss";
import "preact-material-components/Slider/style.css";

const Teleop = ({
  seconds,
  type,
  handleField,
  handlePyramid,
  handlePortal,
  handleSwitch,
  handleScale,
  handleVault,
  handleScaleFail,
  handleSwitchFail,
  handleVaultFail,
  difference,
  pickupRating,
  pickup,
  onSubmit,
  inBetweenRun,
  climb,
  climbed,
  handleRobotDead,
  handleRobotDeadTime,
  attemptClimb,
  robotDead,
  attemtedClimb
}) => (
  <div className={style.teleop}>
    <text> {seconds} </text>
    <h1> TeleOp </h1>
    <h2> Pickup </h2>
    <div className={style.wrapper}>
      <div className={style.pair}>
        <div className={style.image}>
          <img src="../../assets/images/fieldicon.png" height="30" width="30" />
        </div>
        <div className={style.button}>
          <Button
            disabled={inBetweenRun || robotDead}
            onClick={() => handleField(seconds)}
            stroked
            className={style["css-prop-override"]}
          >
            field
          </Button>
        </div>
      </div>
      <div className={style.pair}>
        <div className={style.image}>
          <img
            src="../../assets/images/pyramidicon.png"
            height="30"
            width="30"
          />
        </div>
        <div className={style.button}>
          <Button
            disabled={inBetweenRun || robotDead}
            onClick={() => handlePyramid(seconds)}
            stroked
            className={style["css-prop-override"]}
          >
            pyramid
          </Button>
        </div>
      </div>
      <div className={style.pair}>
        <div className={style.image}>
          <img
            src="../../assets/images/portalicon.png"
            height="30"
            width="30"
          />
        </div>
        <div className={style.button}>
          <Button
            disabled={inBetweenRun || robotDead}
            onClick={() => handlePortal(seconds)}
            stroked
            className={style["css-prop-override"]}
          >
            portal
          </Button>
        </div>
      </div>
    </div>
    <h2>Dropoff</h2>
    <div className={style.wrapper}>
      <div className={style.pair}>
        <div className={style.image}>
          <img src="../../assets/images/scaleicon.png" height="30" width="30" />
        </div>
        <div className={style.button}>
          <Button
            disabled={!inBetweenRun || robotDead}
            onClick={() => handleScale(difference, type)}
            stroked
            className={style["css-prop-override"]}
          >
            scale
          </Button>
        </div>
        <div className={style.button}>
          <Button
            disabled={!inBetweenRun || robotDead}
            onClick={() => handleScaleFail(difference, type)}
            stroked
            className={style["css-prop-override"]}
          >
            fail
          </Button>
        </div>
      </div>
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
            disabled={!inBetweenRun || robotDead}
            onClick={() => handleSwitch(difference, type)}
            stroked
            className={style["css-prop-override"]}
          >
            switch
          </Button>
        </div>
        <div className={style.button}>
          <Button
            disabled={!inBetweenRun || robotDead}
            onClick={() => handleSwitchFail(difference, type)}
            stroked
            className={style["css-prop-override"]}
          >
            fail
          </Button>
        </div>
      </div>
      <div className={style.pair}>
        <div className={style.image}>
          <img src="../../assets/images/vaulticon.png" height="30" width="30" />
        </div>
        <div className={style.button}>
          <Button
            disabled={!inBetweenRun || robotDead}
            onClick={() => handleVault(difference, type)}
            stroked
            className={style["css-prop-override"]}
          >
            vault
          </Button>
        </div>
        <div className={style.button}>
          <Button
            disabled={!inBetweenRun || robotDead}
            onClick={() => handleVaultFail(difference, type)}
            stroked
            className={style["css-prop-override"]}
          >
            fail
          </Button>
        </div>
      </div>
    </div>
    <div className={style.button}>
      <Button
        onClick={() => handleRobotDead(seconds)}
        stroked
        disabled={robotDead}
        style={{ color: "#fff" }}
      >
        ROBOT DEAD
      </Button>
    </div>
    <div className={style.button}>
      <Button
        onClick={() => handleRobotDeadTime(difference)}
        disabled={!robotDead}
        stroked
        style={{ color: "#fff" }}
      >
        ROBOT UNDEAD
      </Button>
    </div>
    <h4>How was their pickup? (1 = instant, 5 = five or more seconds)</h4>
    <div className={style.slider}>
      <Slider
        discrete
        step={1}
        min={1}
        max={5}
        value={pickupRating}
        onInput={event => pickup(event.detail.value)}
        className={style["css-prop-override"]}
      />
    </div>
    <div className={style.pair}>
      <h4>Climb?</h4>
      <text>attempt: </text>
      <Switch checked={attemtedClimb} onClick={attemptClimb} />
      <text>success: </text>
      <Switch onClick={climb} checked={climbed} />
    </div>
    <div className={style.button}>
      <Button onClick={onSubmit} stroked className={style["css-prop-override"]}>
        SUBMIT
      </Button>
    </div>
  </div>
);

export default Teleop;
