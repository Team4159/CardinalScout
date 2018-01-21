//@flow
import Header from "./component";
import { drawer } from "../../redux/actions/header";
import { connect } from "react-redux";

const mDTP = dispatch => ({
  openDrawer: () => dispatch(drawer(true)),
  closeDrawer: () => dispatch(drawer(false))

});
const mSTP = state => ({
  drawerState: state.header.drawerState
});

export default connect(mSTP, mDTP)(Header);
