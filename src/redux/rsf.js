import firebase from "firebase";
import ReduxSagaFirebase from "redux-saga-firebase";
export const fbConfig = {
  apiKey: "AIzaSyBMLD4eQE8P-CebtDUz3s2VgwpUtCCF0uM",
  authDomain: "cardinalscout-a6125.firebaseapp.com",
  databaseURL: "https://cardinalscout-a6125.firebaseio.com",
  projectId: "cardinalscout-a6125",
  storageBucket: "cardinalscout-a6125.appspot.com",
  messagingSenderId: "97280507952"
};

const firebaseApp = firebase.initializeApp(fbConfig);
const rsf = new ReduxSagaFirebase(firebaseApp);
export default rsf;
