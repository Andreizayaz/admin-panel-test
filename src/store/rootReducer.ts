import { combineReducers } from "@reduxjs/toolkit";
import { usersReducer } from "components/entities/users";

export const rootReducer = combineReducers({
  users: usersReducer,
});
