import math from "mathjs";
math.config({
  number: "BigNumber"
});
const calculateMeanSeconds = teleopDataObj => {
  if (!Array.isArray(teleopDataObj)) return "none";
  const arr = teleopDataObj.map(a => a.seconds);
  return math.mean(arr);
};
export const sortByKey = (key, array) => {
  if (array.length === 0 || array.length === 1) return array;
  let pivot = array[0][key];
  let wall = array.slice(1);
  let smallArray = sortByKey(
    key,
    wall.filter(element => element[key] <= pivot)
  );
  let bigArray = sortByKey(key, wall.filter(element => element[key] > pivot));
  return smallArray.concat(array[0], bigArray);
};
export const sort = array => {
  if (array.length === 0 || array.length === 1) return array;
  let pivot = array[0];
  let wall = array.slice(1);
  let smallArray = sort(wall.filter(element => element <= pivot));
  let bigArray = sort(wall.filter(element => element > pivot));
  return smallArray.concat(array[0], bigArray);
};
export const calculateDriverSkill = ultra =>
  typeof ultra === "object"
    ? math.mean(
        convertDataObjectToArray(ultra)
          .map(ultra => ultra.driverSkill)
          .filter(driverSkill => !isNaN(driverSkill))
      )
    : null;
export const calculateTotalDriverSkill = teamObject =>
  Object.keys(teamObject)
    .map(key => teamObject[key])
    .filter(team => typeof team.ultra === "object")
    .map(team => ({
      driverSkill: calculateDriverSkill(team.ultra),
      team: team.team_number
    }));

export const objectToValueArray = dataObject =>
  Object.keys(dataObject).map(key => dataObject[key]);
const count = (d, pickedUpFrom) =>
  Object.keys(d).reduce(
    (acc, key) => {
      const isAuto = key === "switchAuto" || key === "scaleAuto";
      if (Array.isArray(d[key]) && !isAuto) {
        const countsAndTotals = {
          count:
            acc.count +
            d[key].reduce((ac, obj) => {
              if (obj.pickedUpFrom === pickedUpFrom) return ac + 1;
              return ac + 0;
            }, 0),
          total: acc.total + d[key].length
        };

        return {
          ...countsAndTotals,
          percentage: countsAndTotals.count / countsAndTotals.total * 100 + "%"
        };
      }
      return acc;
    },
    { count: 0, total: 0 }
  );
export const reducePickedUpFrom = pickedUpFrom =>
  pickedUpFrom.reduce((acc, curr) => ({}));
const translateStartingPositions = pos => {
  switch (pos) {
    case 0:
      return "left";
    case 1:
      return "middle";
    case 2:
      return "right";
  }
};
const calculateMeans = dataObject => ({
  team: dataObject.team,
  meanVaultTimeInterval: dataObject.vaultTele
    ? calculateMeanSeconds(dataObject.vaultTele)
    : "none",
  meanScaleTimeInterval: dataObject.scaleTele
    ? calculateMeanSeconds(dataObject.scaleTele)
    : "none",
  meanSwitchTimeInterval: dataObject.switchTele
    ? calculateMeanSeconds(dataObject.switchTele)
    : "none"
});
const excludeKeys = dataObject => {
  const { vaultTele, scaleTele, switchTele, ...restOfData } = dataObject;
  return { restOfData, orginals: { vaultTele, scaleTele, switchTele } };
};
export const calculateData = dataObject => ({
  ...excludeKeys(dataObject).restOfData,
  robotStartingPosition: translateStartingPositions(
    dataObject.robotStartingPosition
  ),
  scaleStartingPosition: translateStartingPositions(
    dataObject.scaleStartingPosition
  ),
  switchStartingPosition: translateStartingPositions(
    dataObject.switchStartingPosition
  ),
  switchCubesTele: dataObject.switchTele ? dataObject.switchTele.length : 0,
  scaleCubesTele: dataObject.scaleTele ? dataObject.scaleTele.length : 0,
  vaultCubesTele: dataObject.vaultTele ? dataObject.vaultTele.length : 0,
  meanVaultTimeInterval: dataObject.vaultTele
    ? calculateMeanSeconds(dataObject.vaultTele)
    : "none",
  meanScaleTimeInterval: dataObject.scaleTele
    ? calculateMeanSeconds(dataObject.scaleTele)
    : "none",
  meanSwitchTimeInterval: dataObject.switchTele
    ? calculateMeanSeconds(dataObject.switchTele)
    : "none",
  pickedUpFrom: {
    pyramid: count(dataObject, "PYRAMID"),
    portal: count(dataObject, "PORTAL"),
    field: count(dataObject, "FIELD")
  },
  originals: excludeKeys(dataObject).orginals
});
export const convertDataObjectToArray = dataObject =>
  typeof dataObject === "object"
    ? Object.keys(dataObject)
        .map(key => dataObject[key])
        .map(data => data.data)
    : null;
export const calculateTotalData = dataArray =>
  Array.isArray(dataArray)
    ? dataArray.map(data => calculateMeans(data)).reduce(
        (total, calcData, index, arr) => {
          const data = {
            ...total,
            scaleIntervalArray: [
              ...total.scaleIntervalArray,
              calcData.meanScaleTimeInterval
            ].filter(int => !isNaN(int)),
            switchIntervalArray: [
              ...total.switchIntervalArray,
              calcData.meanSwitchTimeInterval
            ].filter(int => !isNaN(int)),
            vaultIntervalArray: [
              ...total.vaultIntervalArray,
              calcData.meanVaultTimeInterval
            ].filter(int => !isNaN(int))
          };
          const {
            scaleIntervalArray,
            switchIntervalArray,
            vaultIntervalArray,
            ...rest
          } = data;
          if (index === arr.length - 1)
            return {
              ...rest,
              team: calcData.team,
              meanScaleTimeInterval:
                scaleIntervalArray.length !== 0
                  ? math.mean(scaleIntervalArray)
                  : "none",
              stdScaleTimeInterval:
                scaleIntervalArray.length !== 0
                  ? math.std(scaleIntervalArray)
                  : "none",
              meanSwitchTimeInterval:
                switchIntervalArray.length !== 0
                  ? math.mean(switchIntervalArray)
                  : "none",
              stdSwitchTimeInterval:
                switchIntervalArray.length !== 0
                  ? math.std(switchIntervalArray)
                  : "none",
              meanVaultTimeInterval:
                vaultIntervalArray.length !== 0
                  ? math.mean(vaultIntervalArray)
                  : "none",
              stdVaultTimeInterval:
                switchIntervalArray.length !== 0
                  ? math.std(vaultIntervalArray)
                  : "none"
            };
          return data;
        },
        {
          scaleIntervalArray: [],
          switchIntervalArray: [],
          vaultIntervalArray: []
        }
      )
    : null;
