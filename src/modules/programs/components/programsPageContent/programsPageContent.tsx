import { ProgramDetails } from "models/program";
import React, { useEffect } from "react";
import Card from "../../../../components/atoms/card/card";
import Image from "../../../../components/atoms/image/image";
import { programInitialState } from "../../reducer/reducer";
import "./programsPageContent.scss";

interface IProps {
  getProgramDetailsData: ProgramDetails;
  getProgramsData: Function;
  getProgramsByYear: Function;
}

const initialState = [programInitialState.getProgramDetailsData.programs];

export default function ProgramsPageContent(props: IProps): React.ReactElement {
  const { getProgramDetailsData } = props;
  useEffect(() => {
    props.getProgramsData();
  }, [getProgramDetailsData.programs === undefined]);

  return (
    <div className="programs-page-content">
      {getProgramDetailsData.programs.length === 0 ? (
        <div className="no-launches-div">
          No launches found for the selection
        </div>
      ) : (
        getProgramDetailsData.programs !== undefined &&
        getProgramDetailsData.programs.map((option: any, index: any) => {
          return (
            <Card customClass="card-styles" key={`${option}-${index}`}>
              <div className="image-div">
                <Image
                  src={option.links.mission_patch}
                  alt="space-image"
                  fallBackImageSrc={option.links.mission_patch}
                  previewImageSrc={option.links.mission_patch}
                  customClass="card-image"
                />
              </div>
              <h2 className="mission-name">{`${option.mission_name} #${option.flight_number}`}</h2>
              <div className="card-content-div">
                <p className="mission-details">
                  {`Mission Ids:
                  ${option.mission_id.length > 0 ? option.mission_id : "none"}`}
                </p>
                <p className="mission-details">
                  {`Launch Year: ${option.launch_year}`}
                </p>
                <p className="mission-details">
                  {`Successful Launch:
                  ${option.launch_success}`}
                </p>
                <p className="mission-details">
                  {` Successful Landing:
                  ${
                    option.rocket.first_stage.cores[0].land_success !==
                    undefined
                      ? option.rocket.first_stage.cores[0].land_success
                      : false
                  }`}
                </p>
              </div>
            </Card>
          );
        })
      )}
    </div>
  );
}
