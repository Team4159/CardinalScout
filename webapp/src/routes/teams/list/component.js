import { h } from "preact";
import Button from "preact-material-components/Button";
import "preact-material-components/Button/style.css";
const TeamList = ({ push, list }) => (
  <div>
    {Array.isArray(list) ? (
      list.map(team => (
        <Button onClick={() => push("/teams/" + team)}>{team}</Button>
      ))
    ) : (
      <text>loading</text>
    )}
    <text>use ctrl(or cmd) + f to search teams, i'm lazy</text>
  </div>
);

export default TeamList;
