import { FC, ReactElement, MouseEvent, useState } from "react";

import {
  Drawer,
  Heading,
  Input,
  Pagination,
  Table,
} from "src/components/shared";

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
import { Transactions, setTransactions } from "../transactions";
import { getTransactions } from "./helpers/functions";
import { useDispatch } from "react-redux";
import { transactionType } from "../transactions/store/types";
import { useDrawer } from "./hooks/useDrawer";

export const Users: FC = (): ReactElement => {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const { handleClose, isClose } = useDrawer();
  const { modUsers, users } = useUserList();
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

  const clickTable = async (
    e: MouseEvent<HTMLTableSectionElement, globalThis.MouseEvent>
  ) => {
    const target = (e.target as HTMLTableRowElement).closest("tr");
    if (target) {
      await getTransactions(target.id).then((data) =>
        dispatch(setTransactions(data as transactionType[] | null))
      );
      handleClose(false);
      const userEmail = users.find(({ id }) => id === target.id)?.userData
        .email;

      if (userEmail) {
        setEmail(userEmail);
      }
    }
  };

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
        tableClasses="action-table"
        noDataMsg={NO_DATA_MSG}
        clickTableRow={clickTable}
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
      {!isClose && (
        <div className="overlay" onClick={() => handleClose(true)}>
          <Drawer openClasses={!isClose ? "open-drawer" : ""}>
            <Transactions
              email={email}
              closeHandler={handleClose}
            />
          </Drawer>
        </div>
      )}
    </div>
  );
};
