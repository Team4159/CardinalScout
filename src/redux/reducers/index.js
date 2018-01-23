import { combineReducers } from "redux";
import auth from "./auth";
import header from "./header";
import func from "./func";
const rootReducer = combineReducers({
  auth,
  header,
  func
});
export default rootReducer;
