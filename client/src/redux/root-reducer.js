import { combineReducers } from "redux";
import amformReducer from "./amform/amform.reducer";

export default combineReducers({ amform: amformReducer });
