import { h } from "preact";
import { Router } from "preact-router";
import Home from "../../routes/home";
import Header from "../../containers/header";
import Snack from "../../containers/snack";
import Teleop from "../../routes/teleop";
import Match from "../../routes/match";
import Auto from "../../routes/auto";
import Super from "../../routes/super";
import DataDisplay from "../../routes/datadisplay";

const App = () => (
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
    <Snack />
  </div>
);

export default App;
