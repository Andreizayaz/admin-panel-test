import { RootStateType } from "store";

export const selectUsers = (state: RootStateType) => state.users.users;
