import { useDispatch, useSelector } from "react-redux";
import { selectUsers, setUsers } from "../store";
import { getUsers, modifyUserList } from "../helpers/functions";
import { useEffect } from "react";
import { USERS_URL } from "../helpers/consts";
import { userType } from "../store/types";

export const useUserList = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);

  const modUsers = modifyUserList(users);

  useEffect(() => {
    getUsers(USERS_URL).then((data) => dispatch(setUsers(data as userType[])));
  }, []);

  return { users, modUsers };
};
