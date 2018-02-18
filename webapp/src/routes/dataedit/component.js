import { h } from "preact";
import ToggleEdit from "../../components/toggleedit";
import Button from "preact-material-components/Button";
import Switch from "preact-material-components/Switch";
import TextField from "preact-material-components/TextField";
import "preact-material-components/TextField/style.css";
import "preact-material-components/Button/mdc-button.scss";
import "preact-material-components/Switch/style.css";
import style from "./style.scss";

const Item = ({ text, value, edit }) => (
  <div>
    <Button>{text + ": "}</Button>
    <TextField value={value} onChange={e => edit(text, e.target.value)} />
  </div>
);
const Bool = ({ text, value, edit }) => (
  <div>
    <Button>{text + ": "}</Button>
    <Switch onClick={() => edit(text, !value)} checked={value} />
  </div>
);
//add support for adding and deleting nodes of data later
const DataEdit = ({ d, onSubmit, edit }) => (
  <div className={style.list}>
    {Object.keys(d).map(key => {
      if (Array.isArray(d[key])) {
        return <ToggleEdit edit={edit} key={key} text={key} data={d[key]} />;
      }
      if (key === "climb" || key === "cross")
        return <Bool text={key} value={d[key]} edit={edit} />;
      return <Item text={key} value={d[key]} edit={edit} />;
    })}
    <Button onClick={onSubmit}> submit </Button>
  </div>
);
export default DataEdit;
