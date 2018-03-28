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
  calculateData,
  calculateTotalData
} = require("./calc.js")
jsonfile.readFile("./cache/data.json", (err, data) => {
  if (err) console.log(err)
  const exampleDataObject = data["4159"].data
  const dataArray = convertDataObjectToArray(exampleDataObject)
  const calcData = Object.keys(data)
    .filter(key => !isNaN(key))
    //gets the data Object from each team object
    .map(key => data[key].data)
    .filter(d => typeof d === "object")
    .map(d => convertDataObjectToArray(d))
    .map(dataArray => calculateTotalData(dataArray))
  console.log(calcData)
  return null
})
