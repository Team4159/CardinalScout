//@flow
import * as React from "react";
import { h } from "preact";
import List from "preact-material-components/List";
import TextField from "preact-material-components/TextField";
import "preact-material-components/List/style.css";
import "preact-material-components/TextField/style.css";
const Item = ({ text }) => (
  <div>
    <List.Item>{text}</List.Item>
    <TextField />
  </div>
);
const DataDisplay = () => (
  <List>
    <List.Item>hello</List.Item>
    <List.Item>world</List.Item>
  </List>
);

export default DataDisplay;
