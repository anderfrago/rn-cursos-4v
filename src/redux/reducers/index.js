import { combineReducers } from "redux";
import courses from "./courseReducer";

// Combine all the reducers
const rootReducer = combineReducers({
  courses
});

export default rootReducer;
