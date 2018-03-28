import Ranks from "./component";
import { connect } from "react-redux";
import { createSelector } from "reselect";
import {
  calculateTotalData,
  convertDataObjectToArray,
  sortByKey
} from "../../../calculations.js";
const getRootData = state => state.fb.teams;
const doCalculations = data =>
  Object.keys(data)
    .filter(key => !isNaN(key))
    //gets the data Object from each team object
    .map(key => data[key].data)
    .filter(d => typeof d === "object")
    .map(d => convertDataObjectToArray(d))
    .map(dataArray => calculateTotalData(dataArray));
const createSortedData = calculatedDataArray => ({
  meanSwitchTimeInterval: sortByKey(
    "meanSwitchTimeInterval",
    calculatedDataArray
  ),
  meanScaleTimeInterval: sortByKey(
    "meanScaleTimeInterval",
    calculatedDataArray
  ),
  meanVaultTimeInterval: sortByKey("meanVaultTimeInterval", calculatedDataArray)
});
const ranksSelector = createSelector([getRootData], data =>
  createSortedData(doCalculations(data))
);
const mSTP = state => ({
  ranks: ranksSelector(state)
});
export default connect(mSTP)(Ranks);
