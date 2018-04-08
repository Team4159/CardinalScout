import { h } from "preact";
import styles from "./style.scss";
import JSONTree from "react-json-tree";
const imgs = urls =>
  Array.isArray(urls) ? (
    urls.map(url => <img key={url} className={styles.img} src={url} />)
  ) : (
    <text>none yet lul</text>
  );
const Team = ({
  match,
  data,
  imageUrls,
  totalData,
  ultraData,
  pitscoutData
}) => (
  <div className={styles.team}>
    <h3>{match.params.team}</h3>
    {imageUrls ? imgs(imageUrls) : <text>images loading</text>}
    <h4>Summary of data</h4>
    <JSONTree data={totalData} shouldExpandNode={() => true} />
    <h4>Pitscout Data</h4>
    {pitscoutData ? (
      pitscoutData.map(d => <JSONTree data={d} shouldExpandNode={() => true} />)
    ) : (
      <text>none</text>
    )}
    <h4>Ultra Scout Data</h4>
    {ultraData ? (
      ultraData.map(d => <JSONTree data={d} shouldExpandNode={() => true} />)
    ) : (
      <text>none</text>
    )}
    <h4>Match Datas</h4>
    <div>
      {data ? (
        data.map(d => <JSONTree data={d} shouldExpandNode={() => true} />)
      ) : (
        <text>none</text>
      )}
    </div>
  </div>
);
export default Team;
