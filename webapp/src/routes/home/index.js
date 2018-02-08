import { h } from "preact";
import "preact-material-components/Card/style.css";
import "preact-material-components/Button/style.css";
import Button from "preact-material-components/Button";
import style from "./style.scss";
import { connect } from "react-redux";
import { loginRequest, logoutRequest } from "../../redux/actions/auth";
const Home = ({ login, logout, newData }) => (
  <div className={style.home}>
    <h1>Home Route</h1>
    <div className={style.button}>
      <Button onClick={login} stroked ripple>
        login
      </Button>
    </div>
    <div className={style.button}>
      <Button onClick={logout} stroked ripple>
        logout
      </Button>
    </div>
  </div>
);

const mSTP = state => ({});
const mDTP = {
  login: loginRequest,
  logout: logoutRequest
};

export default connect(mSTP, mDTP)(Home);
