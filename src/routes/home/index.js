import { h } from "preact";
import "preact-material-components/Card/style.css";
import "preact-material-components/Button/style.css";
import style from "./style";
import Login from "../../components/forms/login";
const Home = () => (
  <div class={style.home}>
    <h1>Home route</h1>
    <Login />
  </div>
);
export default Home;
