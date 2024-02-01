import { FC, ReactElement } from "react";

import { DOTS } from "./helpers/consts";

import "./Pagination.scss";

type PaginationPropsTypes = {
  currPage: number;
  pagination: string[];
  paginationHandler: () => void;
  handleNav: () => void;
};

export const Pagination: FC<PaginationPropsTypes> = ({
  currPage,
  pagination,
  paginationHandler,
  handleNav,
}): ReactElement => (
  <div className="pag-and-nav nav-wrapper">
    <div className="navigation" onClick={handleNav}>
      <button className="nav-prev bg-image"></button>
      <button className="nav-next bg-image"></button>
    </div>
    <div className="pagination" onClick={paginationHandler}>
      {pagination?.map((item, index) => (
        <button
          name={item !== DOTS ? item : undefined}
          className={`${currPage === index + 1 ? "item item_active" : "item"}`}
        >
          {item}
        </button>
      ))}
    </div>
  </div>
);
