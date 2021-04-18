import { ProgramDetails } from "models/program";
import {
  ALL_PROGRAMS_BY_YEAR,
  LAUNCH_AND_LAND_FILTER,
  LAUNCH_SUCCESS_FILTER,
  PROGRAMS_WITHOUT_FILTER,
} from "../actions/actionTypes";

export interface IProgramLoading {
  getProgramDetails: boolean;
}
export interface IProgramError {
  getProgramDetails: string;
}
export interface IProgramState {
  getProgramDetailsData: ProgramDetails;
  error: IProgramError;
  loading: IProgramLoading;
}

export const programInitialState: IProgramState = {
  getProgramDetailsData: {
    programs: [],
  },
  error: {
    getProgramDetails: "",
  },
  loading: {
    getProgramDetails: false,
  },
};

const programReducer = (
  state = programInitialState,
  action: { payload: any; type: string }
): IProgramState => {
  switch (action.type) {
    // programs without filter
    case PROGRAMS_WITHOUT_FILTER.GET.LOADING:
      return {
        ...state,
        loading: { ...state.loading, getProgramDetails: true },
        error: { ...state.error, getProgramDetails: null },
      };
    case PROGRAMS_WITHOUT_FILTER.GET.SUCCESS:
      return {
        ...state,
        loading: { ...state.loading, getProgramDetails: false },
        getProgramDetailsData: action.payload,
      };
    case PROGRAMS_WITHOUT_FILTER.GET.ERROR:
      return {
        ...state,
        loading: { ...state.loading, getProgramDetails: false },
        error: { ...state.error },
      };

    // programs with all filter
    case ALL_PROGRAMS_BY_YEAR.GET.LOADING:
      return {
        ...state,
        loading: { ...state.loading, getProgramDetails: true },
        error: { ...state.error, getProgramDetails: null },
      };
    case ALL_PROGRAMS_BY_YEAR.GET.SUCCESS:
      return {
        ...state,
        loading: { ...state.loading, getProgramDetails: false },
        getProgramDetailsData: action.payload,
      };
    case ALL_PROGRAMS_BY_YEAR.GET.ERROR:
      return {
        ...state,
        loading: { ...state.loading, getProgramDetails: false },
        error: { ...state.error },
      };

    // programs with launch_success filter
    case LAUNCH_SUCCESS_FILTER.GET.LOADING:
      return {
        ...state,
        loading: { ...state.loading, getProgramDetails: true },
        error: { ...state.error, getProgramDetails: null },
      };
    case LAUNCH_SUCCESS_FILTER.GET.SUCCESS:
      return {
        ...state,
        loading: { ...state.loading, getProgramDetails: false },
        getProgramDetailsData: action.payload,
      };
    case LAUNCH_SUCCESS_FILTER.GET.ERROR:
      return {
        ...state,
        loading: { ...state.loading, getProgramDetails: false },
        error: { ...state.error },
      };

    //programs with land_success filter
    case LAUNCH_AND_LAND_FILTER.GET.LOADING:
      return {
        ...state,
        loading: { ...state.loading, getProgramDetails: true },
        error: { ...state.error, getProgramDetails: null },
      };
    case LAUNCH_AND_LAND_FILTER.GET.SUCCESS:
      return {
        ...state,
        loading: { ...state.loading, getProgramDetails: false },
        getProgramDetailsData: action.payload,
      };
    case LAUNCH_AND_LAND_FILTER.GET.ERROR:
      return {
        ...state,
        loading: { ...state.loading, getProgramDetails: false },
        error: { ...state.error },
      };

    default:
      return state;
  }
};
export default programReducer;
