//@flow
import * as React from "react";
import { h } from "preact";
import Button from "preact-material-components/Button";
import { connect } from "react-redux";
import { saveNewData } from "../../redux/actions/fb";
import style from "./style.css";
const Item = ({ text }) => <text>{text}</text>;
const DataDisplay = ({ d, saveNewData }) => (
  <div className={style.list}>
    {Object.keys(d).map(key => <Item text={key + ": " + d[key]} />)}
    <Button onClick={saveNewData}> submit </Button>
  </div>
);

export default connect(
  state => ({
    d: state.data
  }),
  {
    saveNewData
  }
)(DataDisplay);
