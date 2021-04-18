import { call, put, takeLatest } from "@redux-saga/core/effects";
import { ProgramDetails } from "../../../models/program";
import { ProgramRepository } from "../../../repositories/Programs/programs";
import { ProgramActions } from "../actions/actions";
import {
  ALL_PROGRAMS_BY_YEAR,
  LAUNCH_AND_LAND_FILTER,
  LAUNCH_SUCCESS_FILTER,
  PROGRAMS_WITHOUT_FILTER,
} from "../actions/actionTypes";

// worker saga to get programs without filter
function* getProgramsWorkerSaga() {
  try {
    const response: ProgramDetails = yield call(
      ProgramRepository.getProgramDetails
    );
    yield put(ProgramActions.getProgramsDataSuccess(response));
  } catch (error) {
    console.log("Inside saga error", error);
    yield put(ProgramActions.getProgramsDataError(error));
  }
}

// worker saga to get programs based on all filter for a specific year
function* getProgamsByYearWorkerSaga(action) {
  try {
    const response: ProgramDetails = yield call(
      ProgramRepository.getProgramDetailsByYear,
      action.payload
    );
    yield put(ProgramActions.getProgramsByYearSuccess(response));
  } catch (error) {
    yield put(ProgramActions.getProgramsByYearError(error));
  }
}

// worker saga to get programs based on launch_success filter
function* getProgramsBySuccessfulLaunchWorkerSaga(action) {
  try {
    const response: ProgramDetails = yield call(
      ProgramRepository.getProgramDetailsBySuccessfulLaunch,
      action.payload
    );
    yield put(ProgramActions.getProgramsBySuccessfulLaunchSuccess(response));
  } catch (error) {
    yield put(ProgramActions.getProgramsBySuccessfulLaunchError(error));
  }
}

// worker saga to get programs based on land_success filter
function* getProgramsBySuccessfulLandWorkerSaga(action) {
  try {
    const response: ProgramDetails = yield call(
      ProgramRepository.getProgramDetailsBySuccessfulLand,
      action.payload
    );
    yield put(ProgramActions.getProgramsBySuccessfulLandSuccess(response));
  } catch (error) {
    yield put(ProgramActions.getProgramsBySuccessfulLandError(error));
  }
}

export default function* programsWatcherSaga() {
  yield takeLatest(PROGRAMS_WITHOUT_FILTER.GET.LOADING, getProgramsWorkerSaga);
  yield takeLatest(
    ALL_PROGRAMS_BY_YEAR.GET.LOADING,
    getProgamsByYearWorkerSaga
  );
  yield takeLatest(
    LAUNCH_SUCCESS_FILTER.GET.LOADING,
    getProgramsBySuccessfulLaunchWorkerSaga
  );
  yield takeLatest(
    LAUNCH_AND_LAND_FILTER.GET.LOADING,
    getProgramsBySuccessfulLandWorkerSaga
  );
}
