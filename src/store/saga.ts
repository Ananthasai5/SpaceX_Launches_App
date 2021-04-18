import programsWatcherSaga from "../modules/programs/saga/saga";
import { all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([programsWatcherSaga()]);
}