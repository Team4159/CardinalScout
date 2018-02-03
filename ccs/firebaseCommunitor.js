const admin = require("firebase-admin")

const serviceAccount = require("./cardinalscout-66e10-firebase-adminsdk-fgoi1-83a4b571f2.json")

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://cardinalscout-66e10.firebaseio.com"
})
