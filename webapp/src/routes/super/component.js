import { h, Component } from "preact";
import { route } from "preact-router";
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

const Super = ({ seconds, levitatePower, forcePower, boostPower }) => (
  <div className={style.super}>
    <Timer seconds={seconds} />
    <div>
      <h1>notes</h1>
      <p>team 1</p>
      <TextField textarea />
      <p>team 2</p>
      <TextField textarea />
      <p>team 3</p>
      <TextField textarea />
      <p>general</p>
      <TextField textarea />
      <h1>power ups</h1>
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
      <h1>driver skill</h1>
      <p>
        rate the drivers on the team you're evaluating relative to each other
        from 1 to 3
      </p>
    </div>
    <div>
      <h2>defense</h2>
      <div>
        <p>Team 1</p>
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
      <div>
        <p>Team 2</p>
        <FormField>
          <Radio id="midrating-1" name="Middle Rating" />
          <label for="midrating-1">1</label>
        </FormField>
        <FormField>
          <Radio id="midrating-2" name="Middle Rating" />
          <label for="midrating-2">2</label>
        </FormField>
        <FormField>
          <Radio id="midrating-3" name="Middle Rating" />
          <label for="midrating-3">3</label>
        </FormField>
      </div>
      <div>
        <p>Team 3</p>
        <FormField>
          <Radio id="botrating-1" name="Bottom Rating" />
          <label for="botrating-1">1</label>
        </FormField>
        <FormField>
          <Radio id="botrating-2" name="Bottom Rating" />
          <label for="botrating-2">2</label>
        </FormField>
        <FormField>
          <Radio id="botrating-3" name="Bottom Rating" />
          <label for="botrating-3">3</label>
        </FormField>
      </div>
    </div>
    <div>
      <h2>scale control</h2>
      <div>
        <p>Team 1</p>
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
      <div>
        <p>Team 2</p>
        <FormField>
          <Radio id="midrating-1" name="Middle Rating" />
          <label for="midrating-1">1</label>
        </FormField>
        <FormField>
          <Radio id="midrating-2" name="Middle Rating" />
          <label for="midrating-2">2</label>
        </FormField>
        <FormField>
          <Radio id="midrating-3" name="Middle Rating" />
          <label for="midrating-3">3</label>
        </FormField>
      </div>
      <div>
        <p>Team 3</p>
        <FormField>
          <Radio id="botrating-1" name="Bottom Rating" />
          <label for="botrating-1">1</label>
        </FormField>
        <FormField>
          <Radio id="botrating-2" name="Bottom Rating" />
          <label for="botrating-2">2</label>
        </FormField>
        <FormField>
          <Radio id="botrating-3" name="Bottom Rating" />
          <label for="botrating-3">3</label>
        </FormField>
      </div>
    </div>
    <div>
      <h2>switch control</h2>
      <div>
        <p>Team 1</p>
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
      <div>
        <p>Team 2</p>
        <FormField>
          <Radio id="midrating-1" name="Middle Rating" />
          <label for="midrating-1">1</label>
        </FormField>
        <FormField>
          <Radio id="midrating-2" name="Middle Rating" />
          <label for="midrating-2">2</label>
        </FormField>
        <FormField>
          <Radio id="midrating-3" name="Middle Rating" />
          <label for="midrating-3">3</label>
        </FormField>
      </div>
      <div>
        <p>Team 3</p>
        <FormField>
          <Radio id="botrating-1" name="Bottom Rating" />
          <label for="botrating-1">1</label>
        </FormField>
        <FormField>
          <Radio id="botrating-2" name="Bottom Rating" />
          <label for="botrating-2">2</label>
        </FormField>
        <FormField>
          <Radio id="botrating-3" name="Bottom Rating" />
          <label for="botrating-3">3</label>
        </FormField>
      </div>
    </div>
  </div>
);
export default Super;
