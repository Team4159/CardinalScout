const admin = require("firebase-admin")

const serviceAccount = require("./cardinalscout-66e10-firebase-adminsdk-fgoi1-83a4b571f2.json")

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://cardinalscout-66e10.firebaseio.com"
})
const db = admin.database()
const updateFirebaseWithTeam = team => {
  console.log(team.team_number + ",")
  db.ref("teams/" + team.team_number).set(team)
}
const updateFirebaseWithMatch = match => {
  console.log(match.number + ",")
  db.ref("matches/" + match.number).set(match)
}

const addTeamsToFirebase = teams => {
  console.log("\n adding teams to firebase")
  teams.forEach(team => updateFirebaseWithTeam(team))
}
async function getFirebaseNormalData() {
  try {
    const data = await db
      .ref("data/")
      .once("value")
      .then(snapshot => snapshot.val())
    return data
  } catch (e) {
    console.error(e)
  }
}
module.exports = {
  updateFirebaseWithTeam,
  updateFirebaseWithMatch,
  addTeamsToFirebase,
  getFirebaseNormalData
}
