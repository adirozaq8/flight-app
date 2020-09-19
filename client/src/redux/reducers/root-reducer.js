import { combineReducers } from "redux";
import travelFormReducer from "./travelform.reducer";

export default combineReducers({
  travelForm: travelFormReducer,
});
