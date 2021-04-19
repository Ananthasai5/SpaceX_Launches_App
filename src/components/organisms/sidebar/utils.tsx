export const handleYearClick = (option, props, setClickedYear) => {
  if (option) {
    props.getProgramsByYear(option);
  } else {
    setClickedYear(option);
    props.getProgramsData();
  }
};

export const handleSuccessfulLaunchFilter = (
  option,
  props,
  setSuccessfulLaunch
) => {
  if (option) {
    props.getProgramsBySuccessfulLaunch(option.toLowerCase());
  } else {
    setSuccessfulLaunch(option);
    props.getProgramsData();
  }
};

export const handleLaunchAndLandFilter = (option, props, setSuccessfulLand) => {
  if (option) {
    props.getProgramsBySuccessfulLand(option.toLowerCase());
  } else {
    setSuccessfulLand(option);
    props.getProgramsData();
  }
};
