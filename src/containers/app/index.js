//@flow
import { h } from "preact";
import * as React from "react";
import { Provider } from "react-redux";
import { Router } from "preact-router";
import Home from "../../routes/home";
import Header from "../../containers/header";
import configureStore from "../../redux/store";
// import Home from 'async!../routes/home';
// import Profile from 'async!../routes/profile';
type Props = {
  handleRoute: Function
};
const store = configureStore();
const App = ({ handleRoute }: Props) => (
  <Provider store={store}>
    <div id="app">
      <Header />
      <Router onChange={handleRoute}>
        <Home path="/" />
      </Router>
    </div>
  </Provider>
);
export default App;
/*export default class App extends Component {
   Gets fired when the route changes.
   	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
   	@param {string} event.url	The newly routed URL
   
  handleRoute = e => {
    this.currentUrl = e.url;
  };

  render() {
    return (
      <Provider store={store}>
        <div id="app">
          <Router onChange={this.handleRoute}>
            <Home path="/" />
          </Router>
        </div>
      </Provider>
    );
  }
}*/
