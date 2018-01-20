import { h } from "preact";
import style from "./style";
import  Button from "preact-material-components/Button";
import "preact-material-components/TextField/style.css";
import TextField from "preact-material-components/TextField";
import "preact-material-components/Button/style.css";
import "preact-material-components/Theme/style.css";

const Match = ({}) => (
  <div class={style.match}>
    <h1> Match</h1>
    <TextField label="Team Number" />
    <TextField label="Match Number" />
    <Button raised>Start Match</Button>
  </div>
);

export default Match;
