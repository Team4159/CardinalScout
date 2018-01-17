import { h } from "preact";
import { TextField, Button } from "preact-material-components";
import "preact-material-components/TextField/style.css";
import style from "./style.css";

const LoginForm = ({ login, loggedIn, user }) => (
  <div class={style.login}>
    <text> Login form</text>
    <Button login={login}> log in with google</Button>
  </div>
);
/*  <TextField label="email" type="email" />
    <TextField label="password" type="password" />
    <Button> log in</Button>
    */
export default LoginForm;
