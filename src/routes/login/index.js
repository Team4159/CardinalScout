import { h } from 'preact';
import { TextField, Button } from 'preact-material-components';
import 'preact-material-components/TextField/style.css';
import style from './style.css';
const LoginForm = () => (
  <div class={style.login}>
    <text> login form </text>
    <TextField label="Enter email here" type="login" />
    <TextField label="Enter password here" type="password" />
    <Button ripple raised />
  </div>
);
export default LoginForm;
