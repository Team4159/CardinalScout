import { h } from "preact";
import "preact-material-components/Card/style.css";
import "preact-material-components/Button/style.css";
import Timer from "../../components/timer";
import style from "./style.css";

import { connect } from "react-redux";
import { start, stop, reset } from "../../redux/actions/func";

const Home = ({ time, start, stop, reset, status }) => (
  <div className={style.home}>
    <h1>Home Route</h1>
    <Timer
      time={time}
      stop={stop}
      start={start}
      reset={reset}
      status={status}
    />
  </div>
);

const mSTP = state => ({
  time: state.func.seconds,
  status: state.func.status
});
const mDTP = {
  start,
  stop,
  reset
};

export default connect(mSTP, mDTP)(Home);
