var admin = require("firebase-admin");

var serviceAccount = require("./cardinalscout-66e10-firebase-adminsdk-fgoi1-47f153aa33.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://cardinalscout-66e10.firebaseio.com"
});

const db = admin.database();
