import { h } from "preact";
import "preact-material-components/Button/style.css";
import "preact-material-components/Theme/style.css";
import style from "./style.css";
import Button from "preact-material-components/Button";
import Switch from "preact-material-components/Switch";
import "preact-material-components/Switch/style.css";

const Auto = props => (
  <div className={style.auto}>
    <p>Crossed?</p>
    <Switch />
    <div className={style.button}>
      <Button stroked>Box into switch</Button>
    </div>
    <Button stroked>Box into scale</Button>
  </div>
);

export default Auto;
