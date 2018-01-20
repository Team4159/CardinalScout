import { h } from "preact";
import { route } from "preact-router";
import Toolbar from "preact-material-components/Toolbar";
import "preact-material-components/Toolbar/style.css";

const Header = ({ openDrawer, openSettings }) => (
  <div>
    <Toolbar className="toolbar">
      <Toolbar.Row>
        <Toolbar.Section align-start>
          <Toolbar.Icon menu onClick={openDrawer}>
            menu
          </Toolbar.Icon>
          <Toolbar.Title>Preact app</Toolbar.Title>
        </Toolbar.Section>
        <Toolbar.Section align-end onClick={openSettings}>
          <Toolbar.Icon>settings</Toolbar.Icon>
        </Toolbar.Section>
      </Toolbar.Row>
    </Toolbar>
  </div>
);

export default Header;
