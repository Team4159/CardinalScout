import { h } from "preact";
import "preact-material-components/Card/style.css";
import "preact-material-components/Button/style.css";
import style from "./style";
import Login from "../../components/forms/login";

import { connect } from "react-redux";
import { loginRequest, logoutRequest } from "../../redux/actions/auth";

const Home = ({ loginRequest, user, loggedIn, logoutRequest }) => (
  <div class={style.home}>
    <h1>Home route</h1>
    <Login
      logout={logoutRequest}
      login={loginRequest}
      user={user ? user.displayName : "none"}
      loggedIn={loggedIn}
    />
  </div>
);
const mapStateToProps = state => ({
  loggedIn: state.auth.loggedIn,
  user: state.auth.user
});
const mapDispatchToProps = {
  loginRequest,
  logoutRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
