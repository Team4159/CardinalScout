import { h } from "preact";
import Button from "preact-material-components/Button";
import "preact-material-components/Button/style.css";
import "preact-material-components/Theme/style.css";
import style from "./style.css";
const Teleop = ({}) => (
  <div className={style.teleop}>
    <h1> teleop </h1>
    <h2> Pickup </h2>
    <Button raised>field</Button>
    <Button raised>pyramid</Button>
    <Button raised>portal</Button>
    <h3>Dropoff</h3>
    <Button raised>scale</Button>
    <Button raised>switch</Button>
    <Button raised>vault</Button>
    <Button raised>fail</Button>
    <Button raised>fail</Button>
    <Button raised>fail</Button>
    <Button raised>epic fail</Button>
    <h4>How was their pickup?(1=bad, 5=perfect)</h4>
    <Button raised>1</Button>
    <Button raised>2</Button>
    <Button raised>3</Button>
    <Button raised>4</Button>
    <Button raised>5</Button>
  </div>
);

export default Teleop;
