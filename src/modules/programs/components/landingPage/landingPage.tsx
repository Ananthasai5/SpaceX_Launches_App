import { ProgramDetails } from "models/program";
import ProgramsPageContent from "../programsPageContent/programsPageContent";
import React from "react";
import "./landingPage.scss";
import Sidebar from "../../../../components/organisms/sidebar/sidebar";

interface IProps {
  getProgramDetailsData: ProgramDetails;
  getProgramsData: Function;
  getProgramsByYear: Function;
  getProgramsBySuccessfulLaunch: Function;
  getProgramsBySuccessfulLand: Function;
}

export default function LandingPage(props: IProps): React.ReactElement {
  return (
    <div className="landing-page-div">
      <div>
        <Sidebar {...props} />
      </div>
      <div>
        <ProgramsPageContent {...props} />
      </div>
    </div>
  );
}
