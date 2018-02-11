import { h, Component } from "preact";
import Snackbar from "preact-material-components/Snackbar";
import "preact-material-components/Snackbar/style.css";

class Snack extends Component {
  constructor() {
    super();
    this.show = this.show.bind(this);
  }
  show() {
    this.bar.MDComponent.show({
      message: this.props.message
    });
  }
  componentDidMount() {
    this.show();
  }
  render() {
    return (
      <Snackbar
        ref={bar => {
          this.bar = bar;
        }}
      />
    );
  }
}
export default Snack;
