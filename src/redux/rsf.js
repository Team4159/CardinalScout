import firebase from "firebase";
import ReduxSagaFirebase from "redux-saga-firebase";
export const fbConfig = {
  apiKey: "AIzaSyA3DX1NZDW9sv7x_FE4Bd5zYuX9yYaVxoo",
  authDomain: "cardinalscout-66e10.firebaseapp.com",
  databaseURL: "https://cardinalscout-66e10.firebaseio.com",
  projectId: "cardinalscout-66e10",
  storageBucket: "cardinalscout-66e10.appspot.com",
  messagingSenderId: "1061035040061"
};
const firebaseApp = firebase.initializeApp(fbConfig);
const rsf = new ReduxSagaFirebase(firebaseApp);
export default rsf;
