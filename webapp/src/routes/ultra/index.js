//@flow
import { connect } from "react-redux";
import { createSelector } from "reselect";
import {
  force,
  levitate,
  boost,
  rank,
  teamComment
} from "../../redux/actions/ultra";
import { activeTab, stop, reset } from "../../redux/actions/func";
import { push } from "react-router-redux";
import { saveNewUltra } from "../../redux/actions/fb";
import Ultra from "./component";
const rankingsSelector = createSelector(
  state => state.ultra,
  ultra =>
    Object.keys(ultra)
      .filter(key => typeof ultra[key] === "object" && ultra[key] !== null)
      .reduce(
        (acc, curr) => ({
          ...acc,
          [curr]: ultra[curr]
        }),
        {}
      )
);
const mDTP = dispatch => ({
  forcePower: seconds => dispatch(force(seconds)),
  levitatePower: seconds => dispatch(levitate(seconds)),
  boostPower: seconds => dispatch(boost(seconds)),
  rank: (type, team, r) => dispatch(rank(type, team, r)),
  activeTab: tab => dispatch(activeTab(tab)),
  teamComment: (team, comment) => dispatch(teamComment(team, comment)),
  onSubmitPress: () => {
    dispatch(stop());
    dispatch(reset());
    dispatch(saveNewUltra());
    dispatch(push("/"));
  }
});
const mSTP = state => ({
  seconds: state.func.seconds,
  tab: state.func.activeTab,
  rankings: rankingsSelector(state),
  teams: state.ultra.teams
});

export default connect(mSTP, mDTP)(Ultra);
