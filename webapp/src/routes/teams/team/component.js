import { h } from "preact";
import styles from "./style.scss";
const imgs = urls =>
  Array.isArray(urls) ? (
    urls.map(url => <img key={url} className={styles.img} src={url} />)
  ) : (
    <text>none yet lul</text>
  );
const Team = ({ match, data, imageUrls }) => (
  <div className={styles.team}>
    <h3>{match.params.team}</h3>
    {imageUrls ? imgs(imageUrls) : <text>images loading</text>}
  </div>
);
export default Team;
