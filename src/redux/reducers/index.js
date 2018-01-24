import { combineReducers } from "redux";
import auth from "./auth";
import header from "./header";
import func from "./func";
import data from "./data";
const rootReducer = combineReducers({
  auth,
  header,
  func,
  data
});
export default rootReducer;
