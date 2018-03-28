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
const addTeamsToFirebase = teams => {
  console.log("\n adding teams to firebase")
  teams.forEach(team => updateFirebaseWithTeam(team))
}
const getTeamData = async team => {
  const data = await db
    .ref("teams/" + team)
    .once("value")
    .then(d => d.val())
  return data
}
const getRootData = async () => {
  const data = await db
    .ref("/teams")
    .once("value")
    .then(d => d.val())
  return data
}
const getUltraData = async () => {
  return new Promise(function(resolve, reject) {
    db
      .ref("undefined/ultra")
      .once("value")
      .then(d => d.val())
      .catch(e => {
        console.log(e)
        reject(e)
      })
    resolve()
  })
}
module.exports = {
  updateFirebaseWithTeam,
  getTeamData,
  addTeamsToFirebase,
  getUltraData,
  db,
  getRootData
}
