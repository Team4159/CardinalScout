import { h } from "preact";
import { TextField, Button } from "preact-material-components";
import { Field, reduxForm } from "redux-form";
import "preact-material-components/TextField/style.css";
import style from "./style.css";

const renderTextField = ({ input, label }) => (
  <TextField label={label} type={label} />
);
const LoginForm = ({ handleSubmit, submitting, pristine, reset }) => (
  <div class={style.login}>
    <text> login form </text>
    <form onSubmit={handleSubmit}>
      <div>
        <Field name="email" component={renderTextField} label="Email" />
      </div>
      <div>
        <Field name="password" component={renderTextField} label="password" />
      </div>
      <div>
        <Button type="submit" onClick={handleSubmit} disabled={submitting} />
      </div>
    </form>
  </div>
);
export default reduxForm({
  form: "login form"
})(LoginForm);
