import { h } from "preact";
import Button from "preact-material-components/Button";
import "preact-material-components/Button/style.css";
import "preact-material-components/Theme/style.css";
import style from "./style.scss";
import Slider from "preact-material-components/Slider";
import "preact-material-components/Slider/style.css";

const Teleop = ({
  seconds,
  type,
  handleField,
  handlePyramid,
  handlePortal,
  handleSwitch,
  handleScale,
  handleVault,
  handleScaleFail,
  handleSwitchFail,
  handleVaultFail,
  handleEpicFail,
  difference,
  pickupRating,
  pickup,
  onSubmit
}) => (
  <div className={style.teleop}>
    <text> {seconds} </text>
    <h1> TeleOp </h1>
    <h2> Pickup </h2>
    <div className={style.wrapper}>
      <img
        src="https://visualpharm.com/assets/38/Basketball%20Field-595b40b75ba036ed117d916a.svg"
        alt="Smiley face"
        height="50"
        width="50"
      />
      <div className={style.button}>
        <Button
          onClick={() => handleField(seconds)}
          stroked
          className={style["css-prop-override"]}
        >
          field
        </Button>
      </div>
      <div className={style.button}>
        <Button
          onClick={() => handlePyramid(seconds)}
          stroked
          className={style["css-prop-override"]}
        >
          pyramid
        </Button>
      </div>
      <div className={style.button}>
        <Button
          onClick={() => handlePortal(seconds)}
          stroked
          className={style["css-prop-override"]}
        >
          portal
        </Button>
      </div>
    </div>
    <h2>Dropoff</h2>
    <div className={style.wrapper}>
      <div className={style.pair}>
        <div className={style.button}>
          <Button
            onClick={() => handleScale(difference, type)}
            stroked
            className={style["css-prop-override"]}
          >
            scale
          </Button>
        </div>
        <div className={style.button}>
          <Button
            onClick={() => handleScaleFail(difference, type)}
            stroked
            className={style["css-prop-override"]}
          >
            fail
          </Button>
        </div>
      </div>
      <div className={style.pair}>
        <div className={style.button}>
          <Button
            onClick={() => handleSwitch(difference, type)}
            stroked
            className={style["css-prop-override"]}
          >
            switch
          </Button>
        </div>
        <div className={style.button}>
          <Button
            onClick={() => handleSwitchFail(difference, type)}
            stroked
            className={style["css-prop-override"]}
          >
            fail
          </Button>
        </div>
      </div>
      <div className={style.pair}>
        <div className={style.button}>
          <Button
            onClick={() => handleVault(difference, type)}
            stroked
            className={style["css-prop-override"]}
          >
            vault
          </Button>
        </div>
        <div className={style.button}>
          <Button
            onClick={() => handleVaultFail(difference, type)}
            stroked
            className={style["css-prop-override"]}
          >
            fail
          </Button>
        </div>
      </div>
    </div>
    <div className={style.button}>
      <Button
        onClick={() => handleEpicFail(difference, type)}
        stroked
        className={style["css-prop-override"]}
      >
        drop
      </Button>
    </div>
    <h4>How was their pickup? (1 = instant, 5 = five or more seconds)</h4>
    <div className={style.slider}>
      <Slider
        discrete
        step={1}
        min={1}
        max={5}
        value={pickupRating}
        onInput={event => pickup(event.detail.value)}
        className={style["css-prop-override"]}
      />
    </div>
    <div className={style.button}>
      <Button onClick={onSubmit} stroked className={style["css-prop-override"]}>
        SUBMIT
      </Button>
    </div>
  </div>
);

export default Teleop;
