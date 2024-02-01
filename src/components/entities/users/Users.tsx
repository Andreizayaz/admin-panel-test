import { FC, ReactElement } from "react";

import { Table } from "src/components/shared";

import { useUsers } from "./hooks/useUsers";

import "./Users.scss";

export const Users: FC = (): ReactElement => {
  const { currUsers, currHeadings } = useUsers();

  return (
    <div className="users flex-column">
      <Table
        headings={currHeadings}
        data={currUsers.slice(0, 10)}
        keyForIterate="userData"
        isActions={true}
        editClassName="edit-icon"
        deleteClassName="delete-icon"
      />
    </div>
  );
};
