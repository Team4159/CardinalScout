import { h } from "preact";
import Button from "preact-material-components/Button";
import "preact-material-components/Button/style.css";
import "preact-material-components/Theme/style.css";
import style from "./style.css";

const Teleop = ({}) => (
  <div className={style.Teleop}>
    <h1> teleop </h1>
    <h2> Pickup </h2>
    <div className={style.wrapper}>
      <Button raised>field</Button>
      <Button raised>pyramid</Button>
      <Button raised>portal</Button>
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
    <h4>How fast was their pickup?(1 = instant, 5 = 5 or more seconds)</h4>
    <div className={style.wrapper}>
      <Button raised>1</Button>
      <Button raised>2</Button>
      <Button raised>3</Button>
      <Button raised>4</Button>
      <Button raised>5</Button>
    </div>
  </div>
);

export default Teleop;
