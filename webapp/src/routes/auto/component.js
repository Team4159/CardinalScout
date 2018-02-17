import { h } from "preact";
import style from "./style.scss";
import Button from "preact-material-components/Button";
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
  crossed,
  seconds,
  scaleAuto,
  switchAuto,
  push
}) => (
  <div className={style.auto}>
    <Timer seconds={seconds} />
    <h1> Auto </h1>
    <div className={style.h1}>
      <h2>Crossed?</h2>
    </div>
    <div className={style.switch}>
      <Switch
        className={style.override}
        onClick={() => crossAction(!crossed)}
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
