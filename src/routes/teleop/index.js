import { h, Component } from "preact";
import Button from "preact-material-components/Button";
import "preact-material-components/Button/style.css";
import "preact-material-components/Theme/style.css";
import style from "./style.css";
import { connect } from "react-redux";
import Slider from "preact-material-components/Slider";
import "preact-material-components/Slider/style.css";
import {
  field,
  pyramid,
  portal,
  types,
  scaleTele,
  switchTele,
  vaultTele,
  failScale,
  failSwitch,
  failVault,
  failEpic
} from "../../redux/actions/data";
import { record } from "../../redux/actions/func";

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
  handleEpicFail
}) => (
  <div className={style.teleop}>
    <text> {seconds} </text>
    <h1> TeleOp </h1>
    <h2> Pickup </h2>
    <div className={style.wrapper}>
      <div className={style.button}>
        <Button onClick={() => handleField(seconds)} raised>
          field
        </Button>
      </div>
      <div className={style.button}>
        <Button onClick={() => handlePyramid(seconds)} raised>
          pyramid
        </Button>
      </div>
      <div className={style.button}>
        <Button onClick={() => handlePortal(seconds)} raised>
          portal
        </Button>
      </div>
    </div>
    <h2>Dropoff</h2>
    <div className={style.wrapper}>
      <div className={style.pair}>
        <div className={style.button}>
          <Button onClick={() => handleScale(seconds, type)} raised>
            scale
          </Button>
        </div>
        <div className={style.button}>
          <Button onClick={() => handleScaleFail(seconds, type)} raised>
            fail
          </Button>
        </div>
      </div>
      <div className={style.button}>
        <Button onClick={() => handleSwitch(seconds, type)} raised>
          switch
        </Button>
      </div>
      <div className={style.button}>
        <Button onClick={() => handleVault(seconds, type)} raised>
          vault
        </Button>
      </div>
    </div>
    <div className={style.wrapper}>
      <div className={style.button}>
        <Button onClick={() => handleSwitchFail(seconds, type)} raised>
          fail
        </Button>
      </div>
      <div className={style.button}>
        <Button onClick={() => handleVaultFail(seconds, type)} raised>
          fail
        </Button>
      </div>
    </div>
    <div className={style.button}>
      <Button onClick={() => handleEpicFail(seconds, type)} raised>
        epic fail
      </Button>
    </div>
    <h4>How was their pickup? (1 = instant, 5 = five or more seconds)</h4>
    <div className={style.slider}>
      <Slider discrete step={1} value={3} min={1} max={5} />
    </div>
  </div>
);

const mSTP = state => ({
  seconds: state.func.seconds,
  type: state.func.pickedUpFrom
});
const mDTP = dispatch => ({
  handleField: seconds => {
    dispatch(record({ seconds, type: types.FIELD }));
    dispatch(field());
  },
  handlePyramid: seconds => {
    dispatch(record({ seconds, type: types.PYRAMID }));
    dispatch(pyramid());
  },
  handlePortal: seconds => {
    dispatch(record({ seconds, type: types.PORTAL }));
    dispatch(portal());
  },
  handleScale: (seconds, type) => {
    dispatch(scaleTele({ seconds, type }));
  },
  handleSwitch: (seconds, type) => {
    dispatch(switchTele({ seconds, type }));
  },
  handleVault: (seconds, type) => {
    dispatch(vaultTele({ seconds, type }));
  },
  handleScaleFail: (seconds, type) => {
    dispatch(failScale({ seconds, type }));
  },
  handleSwitchFail: (seconds, type) => {
    dispatch(failSwitch({ seconds, type }));
  },
  handleVaultFail: (seconds, type) => {
    dispatch(failVault({ seconds, type }));
  },
  handleEpicFail: (seconds, type) => {
    dispatch(failEpic({ seconds, type }));
  }
});

export default connect(mSTP, mDTP)(Teleop);
