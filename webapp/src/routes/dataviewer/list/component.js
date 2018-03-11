import { h } from "preact";
import List from "preact-material-components/List";
import "preact-material-components/List/style.css";
const Viewer = ({ data }) => (
  <div>
    <List>
      {data.map(d => (
        <List.Item>
          {"team: " + d.data.team + " match: " + d.data.match}
        </List.Item>
      ))}
    </List>
  </div>
);
export default Viewer;
