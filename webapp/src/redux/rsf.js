import ReduxSagaFirebase from "redux-saga-firebase";
import importFirebase from "firebaseImport";
const fbConfig = {
  apiKey: "AIzaSyA3DX1NZDW9sv7x_FE4Bd5zYuX9yYaVxoo",
  authDomain: "cardinalscout-66e10.firebaseapp.com",
  databaseURL: "https://cardinalscout-66e10.firebaseio.com",
  projectId: "cardinalscout-66e10",
  storageBucket: "cardinalscout-66e10.appspot.com",
  messagingSenderId: "1061035040061"
};
export default function rsf() {
  return importFirebase().then(firebase => {
    const app = !firebase.apps.length
      ? firebase.initializeApp(fbConfig)
      : firebase.app();
    const rsf = new ReduxSagaFirebase(app);

    return {
      rsf,
      auth: firebase.auth
    };
  });
}
