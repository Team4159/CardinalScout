import { h } from "preact";
import { withState } from "recompose";
import Tabs from "preact-material-components/Tabs";
import "preact-material-components/Tabs/style.css";
import List from "preact-material-components/List";
import "preact-material-components/List/style.css";

const renderRanks = (data, tab) => (
  <div>
    <List>
      {data.map(dataObject => (
        <List.Item>
          Team: {dataObject.team}. {tab}: {dataObject[tab]}
        </List.Item>
      ))}
    </List>
  </div>
);
//options for tabs are "meanSwitchTimeInterval" "meanVaultTimeInterval" and "meanScaleTimeInterval"
const enhance = withState("tab", "changeTab", "meanSwitchTimeInterval");

const Ranks = enhance(({ tab, changeTab, ranks }) => (
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
        active={tab === "driver-skill"}
        onClick={() => changeTab(() => "driver-skill")}
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
    {ranks[tab] ? renderRanks(ranks[tab], tab) : null}
  </div>
));

export default Ranks;
