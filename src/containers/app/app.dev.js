//@flow
import { h } from "preact";
import * as React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "../../routes/home";
import DevTools from "../devtools";

import configureStore from "../../redux/store";
// import Home from 'async!../routes/home';
// import Profile from 'async!../routes/profile';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <div id="app">
      <DevTools />
      <Router>
        <Home path="/" />
      </Router>
    </div>
  </Provider>
);
export default App;
