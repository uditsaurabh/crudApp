import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import BookReducer from "../redux/slices/Bookslice";
const reducer = combineReducers({
  BookReducer,
});
const store = configureStore({
  reducer,
});
export default store;
