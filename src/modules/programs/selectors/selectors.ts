import { ProgramDetails } from "models/program";
import { createSelector, Selector } from "reselect";
import { IState } from "store/interfaces";
import { IProgramState } from "../reducer/reducer";

const programSelect = (state: IState): IProgramState => state.program;

const selectProgramsData: Selector<IState, ProgramDetails> = createSelector(
  programSelect,
  (program) => program.getProgramDetailsData
);

export const ProgramSelectors = { selectProgramsData };
