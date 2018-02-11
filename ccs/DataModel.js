"use strict"
const firebaseCommunicator = require("./firebaseCommunicator.js")
const jsonFile = require("jsonfile")

const setUpTeam = team => ({
  ...team,
  kappaScoutData: "none yet, lol",
  normalScoutData: "none yet lol"
})
const updateTeamsAndMatchesFromFirebase = () => ({
  teams: firebaseCommunicator.getObjectAtLocation("Teams")
})

module.exports = { updateTeamsAndMatchesFromFirebase, setUpTeam }
