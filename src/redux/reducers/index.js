import { combineReducers } from "redux";
import auth from "./auth";
import header from "./header";
import func from "./func";
import fb from "./fb";
const rootReducer = combineReducers({
  auth,
  header,
  func,
  fb
});
export default rootReducer;
