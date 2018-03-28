import Home from "./component";
import { connect } from "react-redux";
import { loginRequest, logoutRequest } from "../../redux/actions/auth";
import { turnOffSync } from "../../redux/actions/fb";

const mSTP = state => ({
  loggedIn: state.auth.loggedIn,
  online: state.network.online,
  sync: state.fb.syncOn,
  localSaves: state.fb.localSave
});
const mDTP = {
  login: loginRequest,
  logout: logoutRequest,
  turnOffSync
};

export default connect(mSTP, mDTP)(Home);
