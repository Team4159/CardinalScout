//@flow
import * as React from "react";
import { h } from "preact";
import Button from "preact-material-components/Button";
import { connect } from "react-redux";
import { saveNewData } from "../../redux/actions/fb";
import { reset } from "../../redux/actions/data";
import { route } from "preact-router";
import style from "./style.css";

const Item = ({ text }) => <text>{text}</text>;
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
      return <Item text={key + ": " + d[key]} />;
    })}
    <Button onClick={onSubmit}> submit </Button>
  </div>
);

const mDTP = dispatch => ({
  onSubmit: () => {
    dispatch(saveNewData());
    dispatch(reset());
    route("/");
  }
});
export default connect(
  state => ({
    d: state.data
  }),
  mDTP
)(DataDisplay);
