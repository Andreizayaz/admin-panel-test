import { combineReducers } from "@reduxjs/toolkit";
import { usersReducer } from "src/components/entities/users";

export const rootReducer = combineReducers({
  users: usersReducer,
});
