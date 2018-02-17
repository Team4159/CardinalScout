import { h } from "preact";
import CssTransitionGroup from "preact-css-transition-group";
import Button from "preact-material-components/Button";
import TextField from "preact-material-components/TextField";
import "preact-material-components/TextField/style.css";
import "preact-material-components/Button/mdc-button.scss";
import style from "./style.scss";

const Item = ({ text, value }) => (
  <div>
    <Button>{text}</Button>
    <TextField value={value} />
  </div>
);
const DataEdit = ({ d, onSubmit }) => (
  <div className={style.list}>
    {Object.keys(d).map(key => {
      if (Array.isArray(d[key])) {
        return (
          <div>
            <Button>{key}</Button>
            <CssTransitionGroup
              transitionName={key}
              transitionEnterTimeOut={300}
              transitionLeaveTimeOut={300}
            >
              {d[key].map(k => <Item text={JSON.stringify(k) + ","} />)}
            </CssTransitionGroup>
          </div>
        );
      }
      return <Item text={key + ": "} value={d[key]} />;
    })}
    <Button onClick={onSubmit}> submit </Button>
  </div>
);
export default DataEdit;
