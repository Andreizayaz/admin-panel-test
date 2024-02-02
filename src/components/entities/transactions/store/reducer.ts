import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { transactionType } from "./types";

type initialStateType = {
  transactions: transactionType[]|null;
};

const initialState: initialStateType = {
  transactions: null,
};

export const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    setTransactions: (state, action: PayloadAction<transactionType[]|null>) => {
      state.transactions = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setTransactions } = transactionsSlice.actions;
export const transactionReducer = transactionsSlice.reducer;
