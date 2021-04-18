import { IProgramState } from "modules/programs/reducer/reducer";

export interface IFluxStandardAction<
  Payload = undefined,
  Meta = undefined,
  Error = string
> {
  type: string;
  payload?: Payload;
  error?: Error;
  meta?: Meta;
  visible?: boolean;
}
export interface IState {
  program: IProgramState;
}
