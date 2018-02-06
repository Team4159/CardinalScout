const { addTeamsToFirebase } = require("./firebaseCommunicator.js")
const { fetchTBA } = require("./TBAcommnicator.js")

fetchTBA().then(teams => addTeamsToFirebase(teams))
