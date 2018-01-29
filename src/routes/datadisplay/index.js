//@flow
import * as React from "react";
import { h } from "preact";
import "preact-material-components/List/style.css";
import "preact-material-components/TextField/style.css";
import { connect } from "react-redux";
import style from "./style.css";
const Item = ({ text }) => <text>{text}</text>;
const DataDisplay = ({ d }) => (
  <div className={style.list}>
    {Object.keys(d).map(key => <Item text={key + ": " + d[key]} />)}
  </div>
);

export default connect(
  state => ({
    d: state.data
  }),
  {}
)(DataDisplay);
