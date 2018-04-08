const { addTeamsToFirebase } = require("./firebaseCommunicator.js")
const { setUpTeam } = require("./DataModel.js")
const { fetchTeamsFromTBA } = require("./TBAcommnicator.js")
//insert event-code in fetchTeamFromTba
fetchTeamsFromTBA("2018casj")
  .then(teams => {
    return teams.map(team => setUpTeam(team))
  })
  .then(teams => addTeamsToFirebase(teams))
