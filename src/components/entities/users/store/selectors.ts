import { RootStateType } from "src/store";
import { userType } from "./types";

export const selectUsers = (state: RootStateType): userType[] =>
  state.users.searchUsers;
