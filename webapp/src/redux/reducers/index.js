import { combineReducers } from "redux";
import auth from "./auth";
import header from "./header";
import func from "./func";
import fb from "./fb";
import data from "./data";
import snack from "./snack";
import superdata from "./superdata";
import { routerReducer } from "react-router-redux";
const rootReducer = combineReducers({
  auth,
  header,
  func,
  fb,
  data,
  snack,
  superdata,
  router: routerReducer
});
export default rootReducer;
