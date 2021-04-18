import { ProgramDetails } from "models/program";
import { IFluxStandardAction } from "store/interfaces";
import {
  PROGRAMS_WITHOUT_FILTER,
  ALL_PROGRAMS_BY_YEAR,
  LAUNCH_SUCCESS_FILTER,
  LAUNCH_AND_LAND_FILTER,
} from "./actionTypes";

// actions to get the list of launches initially when page is loaded without filters
const getProgramsData = (): IFluxStandardAction => {
  return { type: PROGRAMS_WITHOUT_FILTER.GET.LOADING };
};

const getProgramsDataSuccess = (
  data: ProgramDetails
): IFluxStandardAction<ProgramDetails> => {
  return { type: PROGRAMS_WITHOUT_FILTER.GET.SUCCESS, payload: data };
};

const getProgramsDataError = (error: string): IFluxStandardAction<string> => {
  return { type: PROGRAMS_WITHOUT_FILTER.GET.ERROR, error: error };
};

// actions to get the list of all the launches for a specific year (all filter)
const getProgramsByYear = (year: number): IFluxStandardAction<number> => {
  return { type: ALL_PROGRAMS_BY_YEAR.GET.LOADING, payload: year };
};

const getProgramsByYearSuccess = (
  data: ProgramDetails
): IFluxStandardAction<ProgramDetails> => {
  return { type: ALL_PROGRAMS_BY_YEAR.GET.SUCCESS, payload: data };
};

const getProgramsByYearError = (error: string): IFluxStandardAction<string> => {
  return { type: ALL_PROGRAMS_BY_YEAR.GET.ERROR, error: error };
};

// actions to get the list of launches based on Launch Success Filter
const getProgramsBySuccessfulLaunch = (
  option: string
): IFluxStandardAction<string> => {
  return { type: LAUNCH_SUCCESS_FILTER.GET.LOADING, payload: option };
};

const getProgramsBySuccessfulLaunchSuccess = (
  data: ProgramDetails
): IFluxStandardAction<ProgramDetails> => {
  return { type: LAUNCH_SUCCESS_FILTER.GET.SUCCESS, payload: data };
};

const getProgramsBySuccessfulLaunchError = (
  error: string
): IFluxStandardAction<string> => {
  return { type: LAUNCH_SUCCESS_FILTER.GET.ERROR, error: error };
};

// actions to get the list of launches based on Launch and Land Filter
const getProgramsBySuccessfulLand = (
  option: string
): IFluxStandardAction<string> => {
  return { type: LAUNCH_AND_LAND_FILTER.GET.LOADING, payload: option };
};

const getProgramsBySuccessfulLandSuccess = (
  data: ProgramDetails
): IFluxStandardAction<ProgramDetails> => {
  return { type: LAUNCH_AND_LAND_FILTER.GET.SUCCESS, payload: data };
};

const getProgramsBySuccessfulLandError = (
  error: string
): IFluxStandardAction<string> => {
  return { type: LAUNCH_AND_LAND_FILTER.GET.ERROR, error: error };
};

export const ProgramActions = {
  getProgramsData,
  getProgramsDataError,
  getProgramsDataSuccess,
  getProgramsByYear,
  getProgramsByYearError,
  getProgramsByYearSuccess,
  getProgramsBySuccessfulLaunch,
  getProgramsBySuccessfulLaunchError,
  getProgramsBySuccessfulLaunchSuccess,
  getProgramsBySuccessfulLand,
  getProgramsBySuccessfulLandError,
  getProgramsBySuccessfulLandSuccess,
};
