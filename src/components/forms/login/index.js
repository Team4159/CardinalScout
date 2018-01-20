import { h } from "preact";
import { TextField, Button } from "preact-material-components";
import "preact-material-components/TextField/style.css";
import "preact-material-components/Button/style.css";
import style from "./style.css";

const LoginForm = ({ login, loggedIn, user, logout }) => (
  <div class={style.login}>
    <text> Login form</text>
    <Button onclick={login} disabled={loggedIn} className={style.button}>
      {" "}
      log in with google
    </Button>
    <Button onclick={logout} disabled={!loggedIn}>
      {" "}
      logout
    </Button>
    <text> {user}</text>
  </div>
);
/*  <TextField label="email" type="email" />
    <TextField label="password" type="password" />
    <Button> log in</Button>
    */
export default LoginForm;
