import Home from "./component";
import { connect } from "react-redux";
import { loginRequest, logoutRequest } from "../../redux/actions/auth";

const mSTP = state => ({
  loggedIn: state.auth.loggedIn,
  online: state.network.online
});
const mDTP = {
  login: loginRequest,
  logout: logoutRequest
};

export default connect(mSTP, mDTP)(Home);
