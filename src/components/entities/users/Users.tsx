import { FC, ReactElement, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { Table } from "src/components/shared";

import { selectUsers, setUsers } from "./store";

import { getUsers } from "../helpers/functions";
import { TOKENS, USERS_URL, headings } from "../helpers/consts";

import "./Users.scss";

export const Users: FC = (): ReactElement => {
  const users = useSelector(selectUsers);
  const dispatch = useDispatch();

  const currUsers = users.map(({ id, userData }) => {
    return {
      id,
      userData: Object.values(userData).map((item) => {
        return { content: item };
      }),
    };
  });

  const currHeadings = headings.map((item) => {
    if (item.heading === TOKENS) {
      return { ...item, classes: "sort" };
    }

    return { ...item };
  });

  useEffect(() => {
    getUsers(USERS_URL).then((data) => dispatch(setUsers(data)));
  }, []);
  return (
    <div className="users flex-column">
      <Table
        headings={currHeadings}
        data={currUsers.slice(0, 10)}
        keyForIterate="userData"
        isActions={true}
      />
    </div>
  );
};
