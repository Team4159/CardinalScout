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
      <div className={style.button}>
        <Button onClick={() => handleField(seconds)} stroked>
          field
        </Button>
      </div>
      <div className={style.button}>
        <Button onClick={() => handlePyramid(seconds)} stroked>
          pyramid
        </Button>
      </div>
      <div className={style.button}>
        <Button onClick={() => handlePortal(seconds)} stroked>
          portal
        </Button>
      </div>
    </div>
    <h2>Dropoff</h2>
    <div className={style.wrapper}>
      <div className={style.pair}>
        <div className={style.button}>
          <Button onClick={() => handleScale(difference, type)} stroked>
            scale
          </Button>
        </div>
        <div className={style.button}>
          <Button onClick={() => handleScaleFail(difference, type)} stroked>
            fail
          </Button>
        </div>
      </div>
      <div className={style.pair}>
        <div className={style.button}>
          <Button onClick={() => handleSwitch(difference, type)} stroked>
            switch
          </Button>
        </div>
        <div className={style.button}>
          <Button onClick={() => handleSwitchFail(difference, type)} stroked>
            fail
          </Button>
        </div>
      </div>
      <div className={style.pair}>
        <div className={style.button}>
          <Button onClick={() => handleVault(difference, type)} stroked>
            vault
          </Button>
        </div>
        <div className={style.button}>
          <Button onClick={() => handleVaultFail(difference, type)} stroked>
            fail
          </Button>
        </div>
      </div>
    </div>
    <div className={style.button}>
      <Button onClick={() => handleEpicFail(difference, type)} stroked>
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
      />
    </div>
    <div className={style.button}>
      <Button onClick={onSubmit} stroked>
        SUBMIT
      </Button>
    </div>
  </div>
);

export default Teleop;
