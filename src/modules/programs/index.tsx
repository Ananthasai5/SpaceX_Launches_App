import { ProgramDetails } from "models/program";
import { connect } from "react-redux";
import React from "react";
import { bindActionCreators, Dispatch } from "redux";
import { IState } from "store/interfaces";
import { ProgramActions } from "./actions/actions";
import LandingPage from "./components/landingPage/landingPage";
import { ProgramSelectors } from "./selectors/selectors";

interface IProps {
  getProgramDetailsData: ProgramDetails;
  getProgramsData: Function;
  getProgramsByYear: Function;
  getProgramsBySuccessfulLaunch: Function;
  getProgramsBySuccessfulLand: Function;
}

function ProgramsPage(props: IProps): React.ReactElement {
  return <LandingPage {...props} />;
}

const mapStateToProps = (state: IState) => {
  return {
    getProgramDetailsData: ProgramSelectors.selectProgramsData(state),
  };
};
const mapDispatchToProps = (dispatch: Dispatch) => {
  return { ...bindActionCreators(ProgramActions, dispatch) };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProgramsPage);
