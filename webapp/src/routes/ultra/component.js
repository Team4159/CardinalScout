import { h } from "preact";
import Button from "preact-material-components/Button";
import "preact-material-components/Button/style.css";
import Slider from "preact-material-components/Slider";
import "preact-material-components/Slider/style.css";
import style from "./style.scss";
import Timer from "../../components/timer";

const Ultra = ({
  seconds,
  levitatePower,
  forcePower,
  boostPower,
  levitateLevel,
  forceLevel,
  boostLevel,
  forceDisabled,
  levitateDisabled,
  boostDisabled,
  onNextPress
}) => (
  <div className={style.super}>
    <Timer seconds={seconds} />
    <h1>match</h1>
    <h2>power ups</h2>
    <div className={style.wrapper}>
      <div className={style.pair}>
        <div className={style.button}>
          <Button
            className={style["css-prop-override"]}
            onClick={() => forcePower(seconds)}
            stroked
            ripple
            disabled={forceDisabled}
          >
            force
          </Button>
        </div>
        <Slider
          onInput={event => forceLevel(event.detail.value)}
          discrete
          min={1}
          max={3}
          step={1}
          className={style.slider}
        />
      </div>
      <div className={style.pair}>
        <div className={style.button}>
          <Button
            className={style["css-prop-override"]}
            onClick={() => levitatePower(seconds)}
            stroked
            ripple
            disabled={levitateDisabled}
          >
            levitate
          </Button>
          <Slider
            onInput={event => levitateLevel(event.detail.value)}
            discrete
            min={1}
            max={3}
            step={1}
            className={style.slider}
          />
        </div>
      </div>
      <div className={style.pair}>
        <div className={style.button}>
          <Button
            className={style["css-prop-override"]}
            onClick={() => boostPower(seconds)}
            stroked
            ripple
            disabled={boostDisabled}
          >
            boost
          </Button>
        </div>
        <Slider
          onInput={event => boostLevel(event.detail.value)}
          discrete
          min={1}
          max={3}
          step={1}
          className={style.slider}
        />
      </div>
    </div>
    <Button onClick={onNextPress}>Next</Button>
  </div>
);
export default Ultra;
