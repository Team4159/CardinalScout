import { h } from "preact";
import Toolbar from "preact-material-components/Toolbar";
import Drawer from "preact-material-components/Drawer";
import List from "preact-material-components/List";
import "preact-material-components/List/style.css";
import "preact-material-components/Toolbar/style.css";
import "preact-material-components/Drawer/style.css";

const Header = ({
  openDrawer,
  drawerState,
  closeDrawer,
  user,
  loggedIn,
  push
}) => (
  <div>
    <Toolbar className="toolbar">
      <Toolbar.Row>
        <Toolbar.Section align-start>
          <Toolbar.Icon menu onClick={openDrawer}>
            menu
          </Toolbar.Icon>
          <Toolbar.Title>Preact app</Toolbar.Title>
        </Toolbar.Section>
        <Toolbar.Section align-end style={{ padding: "10px" }}>
          <text> {loggedIn ? user.displayName : ""}</text>
        </Toolbar.Section>
      </Toolbar.Row>
    </Toolbar>
    <Drawer.TemporaryDrawer open={drawerState} onClose={closeDrawer}>
      <Drawer.TemporaryDrawerContent className="mdc-theme--primary-light-bg">
        <List>
          <List.LinkItem
            onClick={() => {
              push("/");
              closeDrawer();
            }}
          >
            <List.ItemIcon>home</List.ItemIcon>
            Home
          </List.LinkItem>
          <List.LinkItem
            onClick={() => {
              push("/match");
              closeDrawer();
            }}
          >
            match
          </List.LinkItem>
        </List>
      </Drawer.TemporaryDrawerContent>
    </Drawer.TemporaryDrawer>
  </div>
);

export default Header;
