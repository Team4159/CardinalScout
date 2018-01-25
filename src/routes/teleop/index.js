import { h } from "preact";
import Button from "preact-material-components/Button";
import "preact-material-components/Button/style.css";
import "preact-material-components/Theme/style.css";
import style from "./style.css";
import { connect } from "react-redux";
import { field, pyramid, portal } from "../../redux/actions/data";
import { record } from "../../redux/actions/func";

const Teleop = ({ seconds, handleField, handlePyramid, handlePortal }) => (
  <div className={style.teleop}>
    <text> {seconds} </text>
    <h1> teleop </h1>
    <h2> Pickup </h2>
    <div className={style.wrapper}>
      <Button onClick={() => handleField(seconds)} raised>
        field
      </Button>
      <Button onClick={() => handlePyramid(seconds)} raised>
        pyramid
      </Button>
      <Button onClick={() => handlePortal(seconds)} raised>
        portal
      </Button>
    </div>
    <h3>Dropoff</h3>
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
  seconds: state.func.seconds
});
const mDTP = dispatch => ({
  handleField: seconds => {
    dispatch(record(seconds));
    dispatch(field());
  },
  handlePyramid: seconds => {
    dispatch(record(seconds));
    dispatch(pyramid());
  },
  handlePortal: seconds => {
    dispatch(record(seconds));
    dispatch(portal());
  }
});

export default connect(mSTP, mDTP)(Teleop);
