module.exports.searchToValues = search => {
  const query = search.split("?")[1]
  const arr = query.split("&")
  const newArr = arr.map(str => str.split("="))
  const queryObj = newArr.reduce((params, param) => {
    let [key, value] = param
    return { ...params, [key]: value }
  }, {})
  return queryObj
}

//const p = (...paths) => ({ imgPaths: [...paths] })

const { getTeamData, getRootData } = require("./firebaseCommunicator")
const jsonfile = require("jsonfile")
const dataToArray = (data, key) =>
  Object.keys(data)
    .map(d => data[d])
    .map(a => a.data[key])

const getMatches = async () => {
  const data = await db
    .ref("/")
    .once("value")
    .then(d => d.val())
    .then(d => d.teams)
    .then(d =>
      Object.keys(d)
        .filter(key => d[key].data !== undefined)
        .map(key => d[key].data)
        .map(obj => Object.keys(obj).map(key => obj[key]))
    )
    .then(data => [].concat.apply([], data))
    .then(dataArray => dataArray.map(d => d.data.match))
  return data
}
const {
  convertDataObjectToArray,
  convertDataObjectToUltraArray,
  calculateTotalData,
  calculateTotalDriverSkill,
  calculateDriverSkill,
  sortByKey
} = require("./calc.js")
const teams = [
  4990,
  5499,
  4904,
  668,
  846,
  670,
  4669,
  5924,
  1072,
  4091,
  6883,
  604,
  3482,
  852,
  4255,
  6238,
  4186,
  1967,
  1351,
  8
]
const a = async () => {
  let data = []
  for (let i = 0; i < teams.length; i++) {
    data.push(await getTeamData(teams[i]))
  }
  console.log(
    sortByKey(
      "driverSkill",
      data.map(data => ({
        driverSkill: calculateDriverSkill(data),
        team: data.team_number
      }))
    ).map(team => team.team)
  )
}
a()
