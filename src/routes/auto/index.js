import { h } from "preact";
import "preact-material-components/Button/style.css";
import "preact-material-components/Theme/style.css";
import style from "./style.css";
import Button from "preact-material-components/Button";
import Switch from "preact-material-components/Switch";
import "preact-material-components/Switch/style.css";
import { cross } from "../../redux/actions/data";
import { connect } from "react-redux";

const Auto = ({ crossAction, crossed }) => (
  <div className={style.auto}>
    <p>Crossed?</p>
    <Switch onClick={() => console.log(crossed)} />
    <div className={style.button}>
      <Button stroked>Box into switch</Button>
    </div>
    <Button stroked>Box into scale</Button>
  </div>
);

const mDTP = dispatch => ({
  crossAction: c => dispatch(cross(c))
});
const mSTP = state => ({
  crossed: state.data.cross
});

export default connect(mSTP, mDTP)(Auto);
