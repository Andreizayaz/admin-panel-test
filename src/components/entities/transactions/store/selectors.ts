import { RootStateType } from "src/store";
import { transactionType } from "./types";

export const selectTransactions = (
  state: RootStateType
): transactionType[] | null => state.transactions.transactions;
