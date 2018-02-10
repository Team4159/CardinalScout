import { h } from "preact";
import Button from "preact-material-components/Button";
import TextField from "preact-material-components/TextField";
import "preact-material-components/TextField/style.css";
import style from "./style.scss";

const Item = ({ text, value }) => (
  <div>
    <text>{text}</text>
    <TextField value={value} />
  </div>
);
const DataDisplay = ({ d, onSubmit }) => (
  <div className={style.list}>
    {Object.keys(d).map(key => {
      if (Array.isArray(d[key])) {
        return (
          <div>
            <Item text={key} />
            {d[key].map(k => <Item text={JSON.stringify(k) + ","} />)}
          </div>
        );
      }
      return <Item text={key + ": "} value={d[key]} />;
    })}
    <Button onClick={onSubmit}> submit </Button>
  </div>
);
export default DataDisplay;
