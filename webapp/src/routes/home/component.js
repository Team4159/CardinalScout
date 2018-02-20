import { h } from "preact";
import "preact-material-components/Card/style.css";
import "preact-material-components/Button/style.css";
import Button from "preact-material-components/Button";
import style from "./style.scss";

const Home = ({ login, loggedIn }) => (
  <div className={style.home}>
    <h1>Cardinal Scout</h1>
    <div className={style.button}>
      <Button onClick={login} disabled={loggedIn} stroked ripple>
        login
      </Button>
    </div>
  </div>
);

export default Home;
