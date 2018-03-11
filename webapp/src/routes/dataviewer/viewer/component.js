import { h } from "preact";

const Viewer = ({ data }) => (
  <div>
    <text>{JSON.stringify(data)}</text>
  </div>
);

export default Viewer;
