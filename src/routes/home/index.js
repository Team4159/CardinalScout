import { h } from "preact";
import "preact-material-components/Card/style.css";
import "preact-material-components/Button/style.css";
import style from "./style.css";
import { connect } from "react-redux";
import { loginRequest, logoutRequest } from "../../redux/actions/auth";

const Home = ({ logout, login }) => (
  <div className={style.home}>
    <h1>Home Route</h1>
    <button onClick={login}>login</button>
    <button onClick={logout}> logout</button>
  </div>
);

const mSTP = state => ({});
const mDTP = {
  login: loginRequest,
  logout: logoutRequest
};

export default connect(mSTP, mDTP)(Home);
