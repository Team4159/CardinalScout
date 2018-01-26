import { h } from "preact";
import Button from "preact-material-components/Button";
import "preact-material-components/Button/style.css";
import "preact-material-components/Theme/style.css";
import style from "./style.css";
import { connect } from "react-redux";
import {
  field,
  pyramid,
  portal,
  types,
  scaleTele,
  switchTele
} from "../../redux/actions/data";
import { record } from "../../redux/actions/func";

const Teleop = ({ seconds, handleField, handlePyramid, handlePortal }) => (
  <div className={style.teleop}>
    <text> {seconds} </text>
    <h1> teleop </h1>
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
      <Button raised>scale</Button>
      <Button raised>switch</Button>
      <Button raised>vault</Button>
    </div>
    <div className={style.wrapper}>
      <Button raised>fail</Button>
      <Button raised>fail</Button>
      <Button raised>fail</Button>
    </div>
    <Button raised>epic fail</Button>
    <h4>How was their pickup? (1 = instant, 5 = five or more seconds)</h4>
    <div className={style.wrapper}>
      <Button raised>1</Button>
      <Button raised>2</Button>
      <Button raised>3</Button>
      <Button raised>4</Button>
      <Button raised>5</Button>
    </div>
  </div>
);

const mSTP = state => ({
  seconds: state.func.seconds,
  pickedUpFrom: state.func.pickedUpFrom
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
  }
});

export default connect(mSTP, mDTP)(Teleop);
