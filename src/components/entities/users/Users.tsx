import { FC, ReactElement } from "react";

import { Heading, Input, Pagination, Table } from "src/components/shared";

import "./Users.scss";
import {
  NO_DATA_MSG,
  PAGE_SIZE,
  PLACEHOLDER,
  SIBLING_COUNT,
  TABLE_HEADING,
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
    handleNav,
  } = usePagination(PAGE_SIZE, modUsers.length, SIBLING_COUNT);

  console.log(modUsers);

  return (
    <div className="users flex-column">
      <Heading heading={TABLE_HEADING} classes="table-heading" />
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
        handleNav={(e) => {
          handleNav(e);
        }}
        handlePagination={(e) => handlePagination(e)}
      />
    </div>
  );
};
