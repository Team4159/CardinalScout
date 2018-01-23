import { h } from "preact";

const Timer = ({ start, stop, reset, time, status }) => (
  <div>
    <p>{time}</p>
    <button disabled={status === "Running"} onClick={() => reset()}>
      Reset
    </button>
    <button disabled={status === "Running"} onClick={start}>
      Start
    </button>
    <button disabled={status === "Stopped"} onClick={stop}>
      Stop
    </button>
  </div>
);

export default Timer;
