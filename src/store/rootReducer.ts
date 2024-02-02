import { combineReducers } from "@reduxjs/toolkit";
import { transactionReducer } from "src/components/entities/transactions";
import { usersReducer } from "src/components/entities/users";

export const rootReducer = combineReducers({
  users: usersReducer,
  transactions: transactionReducer,
});
