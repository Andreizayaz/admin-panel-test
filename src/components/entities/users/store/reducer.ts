import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { sortType, userType } from "./types";

type initialStateType = {
  users: userType[] | [];
  searchUsers: userType[] | [];
};

const initialState: initialStateType = {
  users: [],
  searchUsers: [],
};

export const usersSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<userType[]>) => {
      state.users = action.payload;
      state.searchUsers = state.users;
    },
    sortUsers: (
      state,
      { payload: { sortKey, isDescSort } }: PayloadAction<sortType>
    ) => {
      state.searchUsers.sort((user1, user2) => {
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
    findUsers: (state, action: PayloadAction<string>) => {
      state.searchUsers = state.users.filter(({ userData }) =>
        Object.values(userData)
          .map((item) => item.toString().toLowerCase())
          .some((item) => item.includes(action.payload.toLowerCase()))
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUsers, sortUsers, findUsers } = usersSlice.actions;
export const usersReducer = usersSlice.reducer;
