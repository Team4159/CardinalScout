const { getFirebaseNormalData } = require("./firebaseCommunicator.js")

getFirebaseNormalData().then(data => console.log(data))
console.log("\033[0;37m")
console.log("\033[1;32mCalcs Cycle " + 1 + "...")
console.log("\033[0;37m")
