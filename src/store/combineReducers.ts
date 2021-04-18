import programReducer from "../modules/programs/reducer/reducer";
import { combineReducers } from "redux";

export default combineReducers({ program: programReducer });
