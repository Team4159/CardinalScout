import { h } from "preact";
import { withState } from "recompose";
import Tabs from "preact-material-components/Tabs";
import "preact-material-components/Tabs/style.css";
import List from "preact-material-components/List";
import "preact-material-components/List/style.css";

const Rankings = ({ data, tab, push }) => (
  <div>
    <List>
      {data.map(
        dataObject =>
          dataObject ? (
            <List.Item onClick={() => push("/teams/" + dataObject.team)}>
              Team: {dataObject.team}. {tab}: {dataObject[tab]}
            </List.Item>
          ) : null
      )}
    </List>
  </div>
);
//options for tabs are "meanSwitchTimeInterval" "meanVaultTimeInterval" and "meanScaleTimeInterval"
const enhance = withState("tab", "changeTab", "meanSwitchTimeInterval");

const Ranks = enhance(({ tab, changeTab, ranks, push, driverSkillRanks }) => (
  <div>
    <Tabs className="mdc-theme--secondary" indicator-accent>
      <Tabs.Tab
        className="mdc-theme--text-primary-on-dark"
        active={tab === "meanSwitchTimeInterval"}
        onClick={() => changeTab(() => "meanSwitchTimeInterval")}
      >
        Switch
      </Tabs.Tab>
      <Tabs.Tab
        className="mdc-theme--text-primary-on-dark"
        active={tab === "meanScaleTimeInterval"}
        onClick={() => changeTab(() => "meanScaleTimeInterval")}
      >
        Scale
      </Tabs.Tab>
      <Tabs.Tab
        className="mdc-theme--text-primary-on-dark"
        active={tab === "driverSkill"}
        onClick={() => changeTab(() => "driverSkill")}
      >
        Driver Skill
      </Tabs.Tab>
      <Tabs.Tab
        className="mdc-theme--text-primary-on-dark"
        active={tab === "meanVaultTimeInterval"}
        onClick={() => changeTab(() => "meanVaultTimeInterval")}
      >
        Vault
      </Tabs.Tab>
    </Tabs>
    {ranks[tab] && <Rankings data={ranks[tab]} tab={tab} push={push} />}
    {tab === "driverSkill" &&
      driverSkillRanks && (
        <Rankings data={driverSkillRanks} tab={tab} push={push} />
      )}
  </div>
));

export default Ranks;
