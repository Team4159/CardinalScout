import { h } from "preact";
import "preact-material-components/Button/style.css";
import Button from "preact-material-components/Button";
import Switch from "preact-material-components/Switch";
import "preact-material-components/Switch/style.css";
import style from "./style.scss";

const Home = ({ login, loggedIn, online, logout, turnOffSync, sync }) => (
  <div className={style.home}>
    <h1>Cardinal Scout</h1>
    <div className={style.button}>
      <Button onClick={login} disabled={loggedIn || !online}>
        login
      </Button>
    </div>
    <div className={style.button}>
      <Button onClick={logout} disabled={!loggedIn || !online}>
        log out
      </Button>
    </div>
    <h2>turn off data syncing to save mobile data:</h2>
    <Switch onClick={turnOffSync} checked={sync} />
  </div>
);

export default Home;
