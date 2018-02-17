//@flow
import Header from "./component";
import { drawer } from "../../redux/actions/header";
import { connect } from "react-redux";
import { push } from "react-router-redux";
const mDTP = dispatch => ({
  openDrawer: () => dispatch(drawer(true)),
  closeDrawer: () => dispatch(drawer(false)),
  push: route => dispatch(push(route))
});
const mSTP = state => ({
  drawerState: state.header.drawerState,
  loggedIn: state.auth.loggedIn,
  user: state.auth.user
});

export default connect(mSTP, mDTP)(Header);
