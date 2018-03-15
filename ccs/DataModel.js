"use strict"
const firebaseCommunicator = require("./firebaseCommunicator.js")

const setUpTeam = team => ({
  ...team,
  imageUrls: "none",
  data: "none",
  ultra: "none"
})
const updateTeamsAndMatchesFromFirebase = () => ({
  teams: firebaseCommunicator.getObjectAtLocation("Teams")
})

module.exports = { updateTeamsAndMatchesFromFirebase, setUpTeam }
