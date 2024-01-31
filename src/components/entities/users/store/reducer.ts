import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { userType } from "./types";

type initialStateType = {
  users: userType[] | null;
};

const initialState: initialStateType = {
  users: null,
};

export const usersSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<userType[]>) => {
      state.users = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUsers } = usersSlice.actions;
export const usersReducer = usersSlice.reducer;
