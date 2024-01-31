import { FC, ReactElement, useEffect } from "react";

import { getUsers } from "../helpers/functions";
import { USERS_URL } from "../helpers/consts";

import "./Users.scss";
import { selectUsers, setUsers } from "./store";
import { useDispatch, useSelector } from "react-redux";

export const Users: FC = (): ReactElement => {
  const users = useSelector(selectUsers);
  const dispatch = useDispatch();

  useEffect(() => {
    getUsers(USERS_URL).then((data) => dispatch(setUsers(data)));
  }, []);
  return <div className="users flex-column"></div>;
};
