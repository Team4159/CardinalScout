import { h, Component } from "preact";
import style from "./style.scss";
import Button from "preact-material-components/Button";
import Select from "preact-material-components/Select";
import TextField from "preact-material-components/TextField";
import { types } from "../../redux/actions/data";
import "preact-material-components/TextField/style.css";
import "preact-material-components/Menu/style.css";
import "preact-material-components/Select/style.css";
import "preact-material-components/List/style.css";
import "preact-material-components/Button/style.css";

const arrSplice = (arr, index, changes) =>
  arr.slice(0, index).concat(changes, arr.slice(index + 1, arr.length));
const optionToIndex = option => {
  switch (option) {
    case types.PYRAMID:
      return 0;
    case types.FIELD:
      return 1;
    case types.PORTAL:
      return 2;
  }
};
const AutoField = ({ text, values, edit }) => (
  <div>
    <text>{text}</text>
    {values.map((value, index) => (
      <div>
        <Button>{"box " + index}</Button>
        <TextField
          onChange={e => {
            if (!isNaN(e.target.value))
              edit(text, arrSplice(values, index, Number(e.target.value)));
          }}
          value={value}
        />
      </div>
    ))}
  </div>
);
const EditField = ({ item, text, data, index, edit }) => (
  <div>
    <h4>Picked up from:</h4>
    <Select
      selectedIndex={optionToIndex(item.pickedUpFrom)}
      className={"mdc-theme--secondary-bg " + style.select}
      onChange={e => {
        edit(
          text,
          arrSplice(data, index, {
            ...item,
            pickedUpFrom: e.selectedOptions[0].innerText
          })
        );
      }}
    >
      <Select.Item>{types.PYRAMID}</Select.Item>
      <Select.Item>{types.FIELD}</Select.Item>
      <Select.Item>{types.PORTAL}</Select.Item>
    </Select>
    <h4>Time interval</h4>
    <TextField
      value={item.seconds}
      onChange={e => {
        if (!isNaN(e.target.value))
          edit(
            text,
            arrSplice(data, index, {
              ...item,
              seconds: Number(e.target.value)
            })
          );
      }}
      label="seconds"
      box
      className="mdc-theme--secondary-bg"
    />
  </div>
);
class ToggleEdit extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleToggle() {
    this.setState({ show: !this.state.show });
  }
  render() {
    const { data, text, edit } = this.props;
    const items = () => {
      if (data.length === 0) return null;
      if (text === "scaleAuto" || text === "switchAuto")
        return <AutoField text={text} edit={edit} values={data} />;
      return data.map((item, index) => (
        <div>
          <EditField
            text={text}
            item={item}
            data={data}
            edit={edit}
            index={index}
          />
        </div>
      ));
    };
    return (
      <div style={style.toggleedit}>
        <Button onClick={this.handleToggle}>{text}</Button>
        {this.state.show ? items() : null}
      </div>
    );
  }
}

export default ToggleEdit;
