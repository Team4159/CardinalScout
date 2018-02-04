import { h } from "preact";
import { route } from "preact-router";
import Button from "preact-material-components/Button";
import "preact-material-components/Button/style.css";
import TextField from "preact-material-components/TextField";
import "preact-material-components/TextField/style.css";


const Super = () => (
  <div>
    <h1>notes</h1>
    <TextField textarea />
    <h1>power ups</h1>
    <Button raised ripple>
      force
    </Button>
    <Button raised ripple>
      levitate
    </Button>
    <Button raised ripple>
      boost
    </Button>
    <h1>driver skill</h1>
  </div>
);
export default Super;
