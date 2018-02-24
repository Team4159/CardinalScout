//@flow
import { combineReducers } from "redux";
import auth from "./auth";
import header from "./header";
import func from "./func";
import fb from "./fb";
import data from "./data";
import snack from "./snack";
import ultra from "./ultra";
import network from "./network";
import { routerReducer } from "react-router-redux";
const rootReducer = combineReducers({
  auth,
  header,
  func,
  fb,
  data,
  snack,
  ultra,
  network,
  router: routerReducer
});
export default rootReducer;
