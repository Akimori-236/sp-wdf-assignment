import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import entitiesReducer from "./EntitiesSlice";
import filtersReducer from "./FiltersSlice";

const rootReducer = combineReducers({
  entities: entitiesReducer,
  filters: filtersReducer,
});

export default configureStore({
  reducer: rootReducer,
});
