//@flow
import { h } from "preact";
import * as React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import App from "./app";
import configureStore from "../../redux/store";

require("preact/devtools");

let { store, persistor, history } = configureStore();

const Root = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App history={history} />
    </PersistGate>
  </Provider>
);
export default Root;
