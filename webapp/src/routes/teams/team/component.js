import { h } from "preact";
import styles from "./style.scss";
import JSONTree from "react-json-tree";
const imgs = urls =>
  Array.isArray(urls) ? (
    urls.map(url => <img key={url} className={styles.img} src={url} />)
  ) : (
    <text>none yet lul</text>
  );
const Team = ({ match, data, imageUrls, totalData }) => (
  <div className={styles.team}>
    <h3>{match.params.team}</h3>
    {imageUrls ? imgs(imageUrls) : <text>images loading</text>}
    <h4>Summary of data</h4>
    <JSONTree data={totalData} shouldExpandNode={() => true} />
    <h4>Match Datas</h4>
    <div>
      {data
        ? data.map(d => <JSONTree data={d} shouldExpandNode={() => true} />)
        : null}
    </div>
  </div>
);
export default Team;
