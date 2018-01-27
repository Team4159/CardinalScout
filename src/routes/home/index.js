import { h } from "preact";
import "preact-material-components/Card/style.css";
import "preact-material-components/Button/style.css";
import style from "./style.css";

import { connect } from "react-redux";
import { loginRequest, logoutRequest } from "../../redux/actions/auth";
import { saveNewData } from "../../redux/actions/fb";
const Home = ({ login, logout, newData }) => (
  <div className={style.home}>
    <h1>Home Route</h1>
    <button onClick={login}>login</button>
    <button onClick={logout}>logout</button>
    <button onClick={newData}> saveNewData</button>
  </div>
);

const mSTP = state => ({
  time: state.func.seconds,
  status: state.func.status
});
const mDTP = {
  login: loginRequest,
  logout: logoutRequest,
  newData: saveNewData
};

export default connect(mSTP, mDTP)(Home);
