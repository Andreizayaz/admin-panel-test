import { FC, ReactElement } from "react";

import { Input, Pagination, Table } from "src/components/shared";

import "./Users.scss";
import { NO_DATA_MSG, PLACEHOLDER } from "./helpers/consts";
import { useSearch, useSort, useUserList } from "./hooks";

export const Users: FC = (): ReactElement => {
  const { modUsers } = useUserList();
  const { currHeadings } = useSort();
  const { handleInput } = useSearch();

  const pagination = ["1", "2", "3", "4", "...", "104"];

  return (
    <div className="users flex-column">
      <Input
        placeholder={PLACEHOLDER}
        classes="search-input"
        inputHandler={handleInput}
      />
      <Table
        headings={currHeadings}
        data={modUsers.slice(0, 10)}
        keyForIterate="userData"
        isActions={true}
        editClassName="edit-icon"
        deleteClassName="delete-icon"
        noDataMsg={NO_DATA_MSG}
      />
      <Pagination
        currPage={1}
        pagination={pagination}
        handleNav={() => {}}
        paginationHandler={() => {}}
      />
    </div>
  );
};
