import { h } from "preact";
import Button from "preact-material-components/Button";
import "preact-material-components/Button/style.css";
import TextField from "preact-material-components/TextField";
import "preact-material-components/TextField/style.css";
import Radio from "preact-material-components/Radio";
import FormField from "preact-material-components/FormField";
import "preact-material-components/FormField/style.css";
import "preact-material-components/List/style.css";
import style from "./style.scss";
import Timer from "../../components/timer";

const Team = ({ team }) => (
  <div className={style.pair}>
    <h1>{"team " + team}</h1>
    <h2>notes</h2>
    <p>text</p>
    <div className={style.textfield}>
      <TextField textarea className={style["css-prop-override"]} />
    </div>
    <p>driver skill</p>
    <div>
      <FormField>
        <Radio id="toprating-1" name="Top Rating" />
        <label for="toprating-1">1</label>
      </FormField>
      <FormField>
        <Radio id="topratingy-2" name="Top Rating" />
        <label for="toprating-2">2</label>
      </FormField>
      <FormField>
        <Radio id="toprating-3" name="Top Rating" />
        <label for="toprating-3">3</label>
      </FormField>
    </div>
    <p>defense</p>
    <div>
      <FormField>
        <Radio id="toprating-1" name="Top Rating" />
        <label for="toprating-1">1</label>
      </FormField>
      <FormField>
        <Radio id="toprating-2" name="Top Rating" />
        <label for="toprating-2">2</label>
      </FormField>
      <FormField>
        <Radio id="toprating-3" name="Top Rating" />
        <label for="toprating-3">3</label>
      </FormField>
    </div>
    <p>scale control</p>
    <div>
      <FormField>
        <Radio id="toprating-1" name="Top Rating" />
        <label for="toprating-1">1</label>
      </FormField>
      <FormField>
        <Radio id="toprating-2" name="Top Rating" />
        <label for="toprating-2">2</label>
      </FormField>
      <FormField>
        <Radio id="toprating-3" name="Top Rating" />
        <label for="toprating-3">3</label>
      </FormField>
    </div>
    <p>switch control</p>
    <div>
      <FormField>
        <Radio id="toprating-1" name="Top Rating" />
        <label for="toprating-1">1</label>
      </FormField>
      <FormField>
        <Radio id="toprating-2" name="Top Rating" />
        <label for="toprating-2">2</label>
      </FormField>
      <FormField>
        <Radio id="toprating-3" name="Top Rating" />
        <label for="toprating-3">3</label>
      </FormField>
    </div>
  </div>
);
const Ultra = ({ seconds, levitatePower, forcePower, boostPower }) => (
  <div className={style.super}>
    <Timer seconds={seconds} />
    <h1>match</h1>
    <h2>general notes</h2>
    <TextField textarea />
    <h2>power ups</h2>
    <div className={style.wrapper}>
      <div className={style.button}>
        <Button
          className={style["css-prop-override"]}
          onClick={() => forcePower(seconds)}
          stroked
          ripple
        >
          force
        </Button>
      </div>
      <div className={style.button}>
        <Button
          className={style["css-prop-override"]}
          onClick={() => levitatePower(seconds)}
          stroked
          ripple
        >
          levitate
        </Button>
      </div>
      <div className={style.button}>
        <Button
          className={style["css-prop-override"]}
          onClick={() => boostPower(seconds)}
          stroked
          ripple
        >
          boost
        </Button>
      </div>
    </div>
    <div className={style.wrapper}>
      <Team team="1" />
      <Team team="2" />
      <Team team="3" />
    </div>
  </div>
);
export default Ultra;
