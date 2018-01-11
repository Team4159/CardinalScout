import { h } from 'preact';
import 'preact-material-components/Card/style.css';
import 'preact-material-components/Button/style.css';
import style from './style';
import LoginForm from '../login';
const Home = () => (
  <div class={style.home}>
    <h1>Home route</h1>
    <LoginForm />
  </div>
);
export default Home;

