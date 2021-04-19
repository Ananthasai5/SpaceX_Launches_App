import React, { useState } from "react";
import Button, { ButtonType } from "../../atoms/button/button";
import Card from "../../atoms/card/card";
import {
  launchAndLandOptions,
  successfulLaunchOptions,
  yearOptions,
} from "./constants";
import "./sidebar.scss";
import {
  handleLaunchAndLandFilter,
  handleSuccessfulLaunchFilter,
  handleYearClick,
} from "./utils";

interface IProps {
  getProgramsByYear: Function;
  getProgramsBySuccessfulLaunch: Function;
  getProgramsBySuccessfulLand: Function;
  getProgramsData: Function;
}

export default function Sidebar(props: IProps): React.ReactElement {
  const [clickedYear, setClickedYear] = useState<Number>(null);
  const [successfulLaunch, setSuccessfulLaunch] = useState<String>(null);
  const [successfulLand, setSuccessfulLand] = useState<String>(null);

  return (
    <div className="sidebar-div">
      <Card customClass={"sidebar-card"}>
        <p className="sidebar-card-heading">Filters</p>
        <p className="sidebar-card-subheading">Launch Year</p>
        <div className="sidebar-card-content">
          {yearOptions &&
            yearOptions.map((option, index) => (
              <Button
                type={ButtonType.Primary}
                id={`${option}-${index}`}
                key={`${option}-${index}`}
                onClick={() => {
                  clickedYear !== option && setClickedYear(option);
                  setSuccessfulLaunch(null);
                  setSuccessfulLand(null);
                  handleYearClick(
                    clickedYear !== option ? option : null,
                    props,
                    setClickedYear
                  );
                }}
                customClass={
                  clickedYear === option ? "button-clicked" : "button-unclick"
                }
              >
                {option}
              </Button>
            ))}
        </div>
        <p className="sidebar-card-subheading">Successful Launch</p>
        <div className="successful-launch-div">
          {successfulLaunchOptions &&
            successfulLaunchOptions.map((option, index) => (
              <Button
                type={ButtonType.Primary}
                id={`${option}-${index}`}
                key={`${option}-${index}`}
                onClick={() => {
                  successfulLaunch !== option && setSuccessfulLaunch(option);
                  setClickedYear(null);
                  setSuccessfulLand(null);
                  handleSuccessfulLaunchFilter(
                    successfulLaunch !== option ? option : null,
                    props,
                    setSuccessfulLaunch
                  );
                }}
                customClass={
                  successfulLaunch === option
                    ? "button-clicked"
                    : "button-unclick"
                }
              >
                {option}
              </Button>
            ))}
        </div>
        <p className="sidebar-card-subheading">Successful Landing</p>
        <div className="successful-launch-div">
          {launchAndLandOptions &&
            launchAndLandOptions.map((option, index) => (
              <Button
                type={ButtonType.Primary}
                id={`${option}-${index}`}
                key={`${option}-${index}`}
                // onClick={() => handleLaunchAndLandFilter(option)}
                onClick={() => {
                  successfulLand !== option && setSuccessfulLand(option);
                  setClickedYear(null);
                  setSuccessfulLaunch(null);
                  handleLaunchAndLandFilter(
                    successfulLand !== option ? option : null,
                    props,
                    setSuccessfulLand
                  );
                }}
                customClass={
                  successfulLand === option
                    ? "button-clicked"
                    : "button-unclick"
                }
              >
                {option}
              </Button>
            ))}
        </div>
      </Card>
    </div>
  );
}
