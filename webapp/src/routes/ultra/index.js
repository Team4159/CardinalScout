//@flow
import { connect } from "react-redux";
import { createSelector } from "reselect";
import { force, levitate, boost, rank } from "../../redux/actions/ultra";
import { activeTab } from "../../redux/actions/func";
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
  activeTab: tab => dispatch(activeTab(tab))
});
const mSTP = state => ({
  seconds: state.func.seconds,
  tab: state.func.activeTab,
  rankings: rankingsSelector(state)
});

export default connect(mSTP, mDTP)(Ultra);
