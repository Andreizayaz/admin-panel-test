import { FC, ReactElement } from "react";

import { Input, Pagination, Table } from "src/components/shared";

import "./Users.scss";
import {
  NO_DATA_MSG,
  PAGE_SIZE,
  PLACEHOLDER,
  SIBLING_COUNT,
} from "./helpers/consts";
import { useSearch, useSort, useUserList } from "./hooks";
import { usePagination } from "src/components/shared/pagination";

export const Users: FC = (): ReactElement => {
  const { modUsers } = useUserList();
  const { currHeadings } = useSort();
  const { handleInput } = useSearch();
  const {
    paginationRage,
    currentPage,
    start,
    end,
    totalPageCount,
    handlePagination,
  } = usePagination(PAGE_SIZE, modUsers.length, SIBLING_COUNT);

  console.log(start);
  console.log(end);
  console.log(paginationRage);

  return (
    <div className="users flex-column">
      <Input
        placeholder={PLACEHOLDER}
        classes="search-input"
        inputHandler={handleInput}
      />
      <Table
        headings={currHeadings}
        data={modUsers.slice(start, end)}
        keyForIterate="userData"
        isActions={true}
        editClassName="edit-icon"
        deleteClassName="delete-icon"
        noDataMsg={NO_DATA_MSG}
      />
      <Pagination
        currentPage={currentPage}
        paginationRange={paginationRage}
        totalPageCount={totalPageCount}
        handleNav={() => {}}
        handlePagination={(e) => handlePagination(e)}
      />
    </div>
  );
};
