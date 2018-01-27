import { h, Component } from "preact";
import List from "preact-material-components/List";
import "preact-material-components/List/style.css";
import style from "./style.css";
import { connect } from "react-redux";

const DataDisplay = ({}) => (
  <div className={style.datadisplay}>
    <h1>Review and Edit Data</h1>
    <h2>Auto</h2>
    <List two-line>
      <List.Item>crossed?</List.Item>
      <List.Item>boxes into switch</List.Item>
      <List.Item>boxes into scale</List.Item>
    </List>
    <h2>TeleOp</h2>
    <List>
      <List.Item />
      <List.Item />
      <List.Item />
    </List>
    <h2>Auto</h2>
    <List>
      <List.Item />
      <List.Item />
      <List.Item />
    </List>
  </div>
);

const mSTP = state => ({});

export default connect(mSTP)(DataDisplay);
