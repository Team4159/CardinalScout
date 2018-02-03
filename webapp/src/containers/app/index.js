//@flow
import { h } from "preact";
import * as React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import { Router } from "preact-router";
import Home from "../../routes/home";
import Header from "../../containers/header";
import Teleop from "../../routes/teleop";
import Match from "../../routes/match";
import Auto from "../../routes/auto";
import Super from "../../routes/super";
import DataDisplay from "../../routes/datadisplay";
import configureStore from "../../redux/store";
// import Home from 'async!../routes/home';
// import Profile from 'async!../routes/profile';
require("preact/devtools");

let { store, persistor } = configureStore();

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <div id="app">
        <Header />
        <div>
          <Router>
            <Home path="/" />
            <Teleop path="/teleop" />
            <Auto path="/auto" />
            <Match path="/match" />
            <DataDisplay path="/datadisplay" />
            <Super path="/super" />
          </Router>
        </div>
      </div>
    </PersistGate>
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
