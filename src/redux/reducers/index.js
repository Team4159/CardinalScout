import { combineReducers } from "redux";
import auth from "./auth";
import header from "./header";
import func from "./func";
import fb from "./fb";
import data from "./data";
const rootReducer = combineReducers({
  auth,
  header,
  func,
  fb,
  data
});
export default rootReducer;
