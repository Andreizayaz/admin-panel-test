import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { sortType, userType } from "./types";

type initialStateType = {
  users: userType[] | [];
};

const initialState: initialStateType = {
  users: [],
};

export const usersSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<userType[]>) => {
      state.users = action.payload;
    },
    sortUsers: (
      state,
      { payload: { sortKey, isDescSort } }: PayloadAction<sortType>
    ) => {
      state.users.sort((user1, user2) => {
        const isNumber =
          typeof user1.userData[sortKey] === "number" &&
          typeof user2.userData[sortKey] === "number";
        if (isNumber) {
          return isDescSort
            ? (user2.userData[sortKey] as number) -
                (user1.userData[sortKey] as number)
            : (user1.userData[sortKey] as number) -
                (user2.userData[sortKey] as number);
        }
        return isDescSort
          ? Number(user2.userData[sortKey] < user1.userData[sortKey])
          : Number(user1.userData[sortKey] < user2.userData[sortKey]);
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUsers, sortUsers } = usersSlice.actions;
export const usersReducer = usersSlice.reducer;
