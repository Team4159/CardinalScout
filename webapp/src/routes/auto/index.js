import { h } from "preact";
import "preact-material-components/Button/style.css";
import "preact-material-components/Theme/style.css";
import style from "./style.css";
import Button from "preact-material-components/Button";
import Switch from "preact-material-components/Switch";
import "preact-material-components/Switch/style.css";
import { cross, scaleAuto, switchAuto } from "../../redux/actions/data";
import { connect } from "react-redux";
import Timer from "../../components/timer";
import { route } from "preact-router";
const changeToTeleop = seconds => {
  if (seconds === 15) {
    route("/teleop");
    return null;
  }
  return null;
};
const Auto = ({ crossAction, crossed, seconds, scaleAuto, switchAuto }) => (
  <div className={style.auto}>
    <Timer seconds={seconds} />
    <div className={style.h1}>
      <h1>Crossed?</h1>
    </div>
    <div className={style.switch}>
      <Switch onClick={() => crossAction(!crossed)} />
    </div>
    <div className={style.button}>
      <Button
        onClick={() => switchAuto(seconds)}
        stroked
        className="mdc-theme-primary"
      >
        Box into switch
      </Button>
    </div>
    <div className={style.button}>
      <Button onClick={() => scaleAuto(seconds)} stroked>
        Box into scale
      </Button>
    </div>
    {changeToTeleop(seconds)}
  </div>
);

const mDTP = dispatch => ({
  crossAction: c => dispatch(cross(c)),
  switchAuto: s => dispatch(switchAuto(parseInt(s, 10))),
  scaleAuto: s => dispatch(scaleAuto(parseInt(s, 10)))
});
const mSTP = state => ({
  crossed: state.data.cross,
  seconds: state.func.seconds
});

export default connect(mSTP, mDTP)(Auto);
