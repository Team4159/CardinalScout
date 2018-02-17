import { h } from "preact";
import { ConnectedRouter } from "react-router-redux";
import { Route } from "react-router";
import Home from "../../routes/home";
import Header from "../../containers/header";
import Snack from "../../containers/snack";
import Teleop from "../../routes/teleop";
import Match from "../../routes/match";
import Auto from "../../routes/auto";
import Ultra from "../../routes/ultra";
import DataEdit from "../../routes/dataedit";

const App = ({ history }) => (
  <div id="app">
    <Header />
    <div>
      <ConnectedRouter history={history}>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/match" component={Match} />
          <Route path="/auto" component={Auto} />
          <Route path="/teleop" component={Teleop} />
          <Route path="/ultra" component={Ultra} />
          <Route path="/dataedit" component={DataEdit} />
        </div>
      </ConnectedRouter>
    </div>
    <Snack />
  </div>
);

export default App;
