import { h } from "preact";
import "preact-material-components/Card/style.css";
import "preact-material-components/Button/style.css";
import style from "./style";
import Login from "../../components/forms/login";

import { connect } from "react-redux";
import { login } from "../../redux/actions";

const Home = ({ login, user, loggedIn }) => (
  <div class={style.home}>
    <h1>Home route</h1>
    <Login login={login} user={user} loggedIn={loggedIn} />
  </div>
);
const mapStateToProps = state => ({
  loggedIn: state.auth.loggedIn,
  user: state.auth.user
});
const mapDispatchToProps = {
  login
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
