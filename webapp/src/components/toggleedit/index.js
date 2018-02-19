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

const addChanges = (arr, index, changes) =>
  arr.slice(0, index).concat(changes, arr.slice(index + 1, arr.length));
const removeIndex = (arr, index) =>
  arr.slice(0, index).concat(arr.slice(index + 1, arr.length));
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
    {values.map((value, index) => (
      <div>
        <h4>{"box " + (index + 1)}</h4>
        <Button
          className="mdc-theme--secondary"
          onClick={() => edit(text, removeIndex(values, index))}
        >
          Remove Data
        </Button>
        <TextField
          onChange={e => {
            if (!isNaN(e.target.value))
              edit(text, addChanges(values, index, Number(e.target.value)));
          }}
          value={value}
          label="seconds"
          box
          className="mdc-theme--secondary-bg"
        />
      </div>
    ))}
    <Button
      className="mdc-theme--secondary"
      onClick={() => edit(text, [...values, 0])}
    >
      Add Data
    </Button>
  </div>
);
const TeleopField = ({ item, text, data, index, edit }) => (
  <div>
    <h3>{"box" + (index + 1)}</h3>
    <h4>Picked up from:</h4>
    <Select
      selectedIndex={optionToIndex(item.pickedUpFrom)}
      className={"mdc-theme--secondary-bg " + style.select}
      onChange={e => {
        edit(
          text,
          addChanges(data, index, {
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
            addChanges(data, index, {
              ...item,
              seconds: Number(e.target.value)
            })
          );
      }}
      label="seconds"
      box
      className="mdc-theme--secondary-bg"
    />
    <Button
      className="mdc-theme--secondary"
      onClick={() => edit(text, removeIndex(data, index))}
    >
      Remove Data
    </Button>
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
      if (data.length === 0 && (text === "scaleAuto" || text === "switchAuto"))
        return (
          <Button
            className="mdc-theme--secondary"
            onClick={() => edit(text, [...data, 0])}
          >
            {" "}
            Add Data{" "}
          </Button>
        );
      if (data.length === 0)
        return (
          <Button
            onClick={() =>
              edit(text, [...data, { pickedUpFrom: "PYRAMID", seconds: 0 }])
            }
            className="mdc-theme--secondary"
          >
            Add Data
          </Button>
        );
      if (text === "scaleAuto" || text === "switchAuto")
        return <AutoField text={text} edit={edit} values={data} />;
      return (
        <div>
          {data.map((item, index) => (
            <div>
              <TeleopField
                text={text}
                item={item}
                data={data}
                edit={edit}
                index={index}
              />
            </div>
          ))}

          <Button
            onClick={() =>
              edit(text, [...data, { pickedUpFrom: "PYRAMID", seconds: 0 }])
            }
            className="mdc-theme--secondary"
          >
            Add data
          </Button>
        </div>
      );
    };
    return (
      <div style={style.toggleedit}>
        <Button onClick={this.handleToggle} className="mdc-theme--secondary">
          {text}
        </Button>
        {this.state.show ? items() : null}
      </div>
    );
  }
}

export default ToggleEdit;
