import { h, Component } from "preact";
import {} from "../../redux/actions/data";
import Timer from "../../components/timer";
import { route } from "preact-router";
import Button from "preact-material-components/Button";
import "preact-material-components/Button/style.css";
import TextField from "preact-material-components/TextField";
import "preact-material-components/TextField/style.css";

const Super = ({}) => (
  <div>
    <h1>notes</h1>
    <TextField textarea />
    <h1>power ups</h1>
    <Button>force</Button>
    <Button>levitate</Button>
    <Button>boost</Button>
    <h1>driver skill</h1>
  </div>
);

const mDTP = dispatch => ({});
const mSTP = state => ({});
