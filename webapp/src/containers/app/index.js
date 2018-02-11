//@flow
import { h } from "preact";
import * as React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import App from "./app";
import configureStore from "../../redux/store";
// import Home from 'async!../routes/home';
// import Profile from 'async!../routes/profile';
require("preact/devtools");

let { store, persistor } = configureStore();

const Root = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
export default Root;
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
