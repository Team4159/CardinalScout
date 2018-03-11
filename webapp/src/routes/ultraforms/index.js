//@flow
import { connect } from "react-redux";
import { createSelector } from "reselect";
import { rank, teamComment } from "../../redux/actions/ultra";
import { activeTab } from "../../redux/actions/func";
import { push } from "react-router-redux";
import { saveNewUltra } from "../../redux/actions/fb";
import UltraForms from "./component";
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
  rank: (type, team, r) => dispatch(rank(type, team, r)),
  activeTab: tab => dispatch(activeTab(tab)),
  teamComment: (team, comment) => dispatch(teamComment(team, comment)),
  onSubmitPress: () => {
    dispatch(saveNewUltra());
    dispatch(push("/"));
  }
});
const mSTP = state => ({
  tab: state.func.activeTab,
  rankings: rankingsSelector(state),
  teams: state.ultra.teams
});

export default connect(mSTP, mDTP)(UltraForms);
