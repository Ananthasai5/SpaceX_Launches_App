import { ActionHelper } from "../../../utils/actionHelper";
const prefix = "programs";

const PROGRAMS_WITHOUT_FILTER = {
  GET: ActionHelper.actionTypesCreator(prefix, "PROGRAMS_WITHOUT_FILTER"),
};
const LAUNCH_SUCCESS_FILTER = {
  GET: ActionHelper.actionTypesCreator(prefix, "LAUNCH_SUCCESS_FILTER"),
};
const LAUNCH_AND_LAND_FILTER = {
  GET: ActionHelper.actionTypesCreator(prefix, "LAUNCH_AND_LAND_FILTER"),
};
const ALL_PROGRAMS_BY_YEAR = {
  GET: ActionHelper.actionTypesCreator(prefix, "ALL_PROGRAMS_BY_YEAR"),
};

export {
  PROGRAMS_WITHOUT_FILTER,
  LAUNCH_AND_LAND_FILTER,
  LAUNCH_SUCCESS_FILTER,
  ALL_PROGRAMS_BY_YEAR,
};
