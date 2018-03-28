import { h } from "preact";
import "preact-material-components/Button/style.css";
import Button from "preact-material-components/Button";
import Switch from "preact-material-components/Switch";
import "preact-material-components/Switch/style.css";
import style from "./style.scss";
//got from kennethjiang/js-file-download
function saveFile(data, filename, mime) {
  let blob = new Blob([data], { type: mime || "application/octet-stream" });
  if (typeof window.navigator.msSaveBlob !== "undefined") {
    // IE workaround for "HTML7007: One or more blob URLs were
    // revoked by closing the blob for which they were created.
    // These URLs will no longer resolve as the data backing
    // the URL has been freed."
    window.navigator.msSaveBlob(blob, filename);
  } else {
    let blobURL = window.URL.createObjectURL(blob);
    let tempLink = document.createElement("a");
    tempLink.style.display = "none";
    tempLink.href = blobURL;
    tempLink.setAttribute("download", filename);

    // Safari thinks _blank anchor are pop ups. We only want to set _blank
    // target if the browser does not support the HTML5 download attribute.
    // This allows you to download files in desktop safari if pop up blocking
    // is enabled.
    if (typeof tempLink.download === "undefined") {
      tempLink.setAttribute("target", "_blank");
    }

    document.body.appendChild(tempLink);
    tempLink.click();
    document.body.removeChild(tempLink);
    window.URL.revokeObjectURL(blobURL);
  }
}
const Home = ({
  login,
  loggedIn,
  online,
  logout,
  turnOffSync,
  sync,
  localSaves
}) => (
  <div className={style.home}>
    <h1>Cardinal Scout</h1>
    <div className={style.button}>
      <Button onClick={login} disabled={loggedIn || !online}>
        login
      </Button>
    </div>
    <div className={style.button}>
      <Button onClick={logout} disabled={!loggedIn || !online}>
        log out
      </Button>
    </div>
    <h2>turn off data syncing to save mobile data:</h2>
    <Switch onClick={turnOffSync} checked={sync} />
    <h2>export local saves</h2>
    <Button
      onClick={() => saveFile(JSON.stringify(localSaves, "localSaves.JSON"))}
    >
      export
    </Button>
  </div>
);

export default Home;
