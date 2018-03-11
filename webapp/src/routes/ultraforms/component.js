import { h } from "preact";
import TextField from "preact-material-components/TextField";
import "preact-material-components/TextField/style.css";
import Radio from "preact-material-components/Radio";
import FormField from "preact-material-components/FormField";
import "preact-material-components/FormField/style.css";
import "preact-material-components/List/style.css";
import Tabs from "preact-material-components/Tabs";
import "preact-material-components/Tabs/style.css";
import style from "./style.scss";
import "preact-material-components/Radio/style.css";
import Button from "preact-material-components/Button";
import "preact-material-components/Button/style.css";
const isRankSelected = (rankings, rank) => {
  let containsRank = false;
  Object.keys(rankings).forEach(key => {
    if (Number(rankings[key]) === Number(rank)) containsRank = true;
  });
  return containsRank;
};
const Fields = ({ field, team, rank, rankings }) => (
  <div>
    <FormField className="mdc-theme--secondary">
      <Radio
        onChange={() => rank(field, team, 0)}
        id={team + field + "-0"}
        name={team + field + " Rating"}
        checked={rankings[team] === 0}
      />
      <label for={team + field + "-0"}>0</label>
    </FormField>
    <FormField className="mdc-theme--secondary">
      <Radio
        onChange={() => rank(field, team, 1)}
        id={team + field + "-1"}
        name={team + field + "Rating"}
        checked={rankings[team] === 1}
        disabled={isRankSelected(rankings, 1) && rankings[team] !== 1}
      />
      <label for={team + field + "-1"}>1</label>
    </FormField>
    <FormField className="mdc-theme--secondary">
      <Radio
        onChange={() => rank(field, team, 2)}
        id={team + field + "-2"}
        name={team + field + " Rating"}
        checked={rankings[team] === 2}
        disabled={isRankSelected(rankings, 2) && rankings[team] !== 2}
      />
      <label for={team + field + "-2"}>2</label>
    </FormField>
    <FormField className="mdc-theme--secondary">
      <Radio
        onChange={() => rank(field, team, 3)}
        id={team + field + "-3"}
        name={team + field + " Rating"}
        checked={rankings[team] === 3}
        disabled={isRankSelected(rankings, 3) && rankings[team] !== 3}
      />
      <label for={team + field + "-3"}>3</label>
    </FormField>
    <FormField className="mdc-theme--secondary">
      <Radio
        onChange={() => rank(field, team, 4)}
        id={team + field + "-4"}
        name={team + field + " Rating"}
        checked={rankings[team] === 4}
        disabled={isRankSelected(rankings, 4) && rankings[team] !== 4}
      />
      <label for={team + field + "-4"}>4</label>
    </FormField>
  </div>
);
const Team = ({ team, rank, rankings, teamComment }) => (
  <div className={style.pair}>
    <h1>{"team " + team}</h1>
    <p>driver skill</p>
    <div>
      <Fields
        team={team}
        rank={rank}
        field="driverSkill"
        rankings={rankings.driverSkill}
      />
    </div>
    <p>scale control</p>
    <div className="mdc-theme--secondary">
      <Fields
        team={team}
        rank={rank}
        field="scaleControl"
        rankings={rankings.scaleControl}
      />
    </div>
    <p>switch control</p>
    <div>
      <Fields
        team={team}
        rank={rank}
        field="switchControl"
        rankings={rankings.switchControl}
      />
    </div>
    <h2>notes about this team</h2>
    <TextField
      textarea
      className={style.textfield}
      onChange={e => teamComment(team, e.target.value)}
      value={rankings.comments[team]}
    />
  </div>
);

const renderTabs = (teams, rank, tab, rankings, teamComment) => (
  <Team
    team={teams[tab]}
    rank={rank}
    rankings={rankings}
    teamComment={teamComment}
  />
);

const UltraForms = ({
  teams,
  rank,
  activeTab,
  tab,
  rankings,
  teamComment,
  onSubmitPress
}) => (
  <div className={style.super}>
    <div className={style.pair}>
      <Tabs className="mdc-theme--secondary" indicator-accent>
        <Tabs.Tab
          className="mdc-theme--text-primary-on-dark"
          active={tab === 0}
          onClick={() => activeTab(0)}
        >
          Team {teams[0]}
        </Tabs.Tab>
        <Tabs.Tab
          className="mdc-theme--text-primary-on-dark"
          active={tab === 1}
          onClick={() => activeTab(1)}
        >
          Team {teams[1]}
        </Tabs.Tab>
        <Tabs.Tab
          className="mdc-theme--text-primary-on-dark"
          active={tab === 2}
          onClick={() => activeTab(2)}
        >
          Team {teams[2]}
        </Tabs.Tab>
      </Tabs>
      {renderTabs(teams, rank, tab, rankings, teamComment)}
    </div>
    <Button onClick={onSubmitPress}>Submit</Button>
  </div>
);
export default UltraForms;
