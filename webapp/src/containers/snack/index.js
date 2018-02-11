import Snack from "./component";
import { connect } from "react-redux";

const SnackContainer = ({ message, showSnack }) => {
  if (showSnack) {
    return <Snack message={message} />;
  }
  return null;
};
export default connect(state => ({
  message: state.snack.message,
  showSnack: state.snack.showSnack
}))(SnackContainer);
