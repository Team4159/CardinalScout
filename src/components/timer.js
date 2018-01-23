import { h } from "preact";

const Timer = ({ start, stop, reset, time, status, record }) => (
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
    <button disabled={status === "Stopped"} onClick={record}>
      Record
    </button>
  </div>
);

export default Timer;
