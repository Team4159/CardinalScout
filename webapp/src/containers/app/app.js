import { h } from "preact";
import { ConnectedRouter } from "react-router-redux";
import { Route } from "react-router";
import Home from "../../routes/home";
import Header from "../../containers/header";
import UltraMatch from "../../routes/ultramatch";
import Snack from "../../containers/snack";
import Teleop from "../../routes/teleop";
import Match from "../../routes/match";
import Auto from "../../routes/auto";
import Ultra from "../../routes/ultra";
import UltraForms from "../../routes/ultraforms";
import DataEdit from "../../routes/dataedit";
import PitScout from "../../routes/pitscout";
import Team from "../../routes/teams/team";
import TeamList from "../../routes/teams/list";
import Ranks from "../../routes/teams/ranks";
import PitScoutV2 from "../../routes/pitscoutv2";
import Images from "../../routes/images";

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
          <Route path="/ultramatch" component={UltraMatch} />
          <Route path="/ultraforms" component={UltraForms} />
          <Route path="/pitscout" exact component={PitScout} />
          <Route path="/teams" exact component={TeamList} />
          <Route path="/teams/:team" component={Team} />
          <Route path="/pitscout/v2" component={PitScoutV2} />
          <Route path="/images" component={Images} />
          <Route path="/ranks" exact component={Ranks} />
        </div>
      </ConnectedRouter>
    </div>
    <Snack />
  </div>
);

export default App;
