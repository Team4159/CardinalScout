"use strict"
const firebaseCommunicator = require("./firebaseCommunicator.js")
const jsonFile = require("jsonfile")

const updateTeamsAndMatchesFromFirebase = () => ({
  teams: firebaseCommunicator.getObjectAtLocation("Teams")
})

module.exports = updateTeamsAndMatchesFromFirebase
