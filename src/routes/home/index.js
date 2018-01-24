import { h } from "preact";
import "preact-material-components/Card/style.css";
import "preact-material-components/Button/style.css";
import Upload from "material-ui-upload/Upload";
import Timer from "../../components/timer";
import style from "./style.css";

import { connect } from "react-redux";
import { start, stop, reset, record } from "../../redux/actions/func";
import { loginRequest } from "../../redux/actions/auth";

const Home = ({ time, start, stop, reset, status, record, login }) => (
  <div className={style.home}>
    <h1>Home Route</h1>
    <Timer
      time={time}
      stop={stop}
      start={start}
      reset={reset}
      status={status}
      record={() => record(time)}
    />
    <button onClick={login}>login</button>
    <Upload label="Add" onFileLoad={() => console.log("hello")} />
  </div>
);

const mSTP = state => ({
  time: state.func.seconds,
  status: state.func.status
});
const mDTP = {
  start,
  stop,
  reset,
  record,
  login: loginRequest
};

export default connect(mSTP, mDTP)(Home);
