import Button, { ButtonType } from "../../atoms/button/button";
import Card from "../../atoms/card/card";
import React from "react";
import {
  launchAndLandOptions,
  successfulLaunchOptions,
  yearOptions,
} from "./constants";
import "./sidebar.scss";

interface IProps {
  getProgramsByYear: Function;
  getProgramsBySuccessfulLaunch: Function;
  getProgramsBySuccessfulLand: Function;
}

export default function Sidebar(props: IProps): React.ReactElement {
  const handleYearClick = (option) => {
    props.getProgramsByYear(option);
  };

  const handleSuccessfulLaunchFilter = (option) => {
    props.getProgramsBySuccessfulLaunch(option.toLowerCase());
  };

  const handleLaunchAndLandFilter = (option) => {
    props.getProgramsBySuccessfulLand(option.toLowerCase());
  };

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
                onClick={() => handleYearClick(option)}
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
                onClick={() => handleSuccessfulLaunchFilter(option)}
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
                onClick={() => handleLaunchAndLandFilter(option)}
              >
                {option}
              </Button>
            ))}
        </div>
      </Card>
    </div>
  );
}
