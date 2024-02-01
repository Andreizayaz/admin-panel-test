import { FC, ReactElement, MouseEvent } from "react";

import "./Pagination.scss";
import { DOTS } from "./helpers/consts";

type PaginationPropsTypes = {
  currentPage: number;
  paginationRange: (string | number)[] | undefined;
  totalPageCount: number;
  handleNav: (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => void;
  handlePagination: (
    e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>
  ) => void;
};

export const Pagination: FC<PaginationPropsTypes> = ({
  currentPage,
  paginationRange,
  totalPageCount,
  handleNav,
  handlePagination,
}): ReactElement => {
  return (
    <div className="pag-and-nav nav-wrapper">
      <div
        className="navigation"
        onClick={(e) => {
          console.log("clicked nav");
          handleNav(e);
        }}
      >
        <button
          disabled={currentPage === 0}
          id="prev"
          className="nav-prev bg-image"
        ></button>
        <button
          disabled={currentPage === totalPageCount - 1}
          id="next"
          className="nav-next bg-image"
        ></button>
      </div>
      <div
        className="pagination"
        onClick={(e) => {
          handlePagination(e);
        }}
      >
        {paginationRange?.map((item, index) => {
          if (item !== DOTS) {
            return (
              <button
                id={`${(item as number) - 1}`}
                key={index}
                disabled={item === DOTS}
                className={`${
                  currentPage === (item as number) - 1
                    ? "item item_active"
                    : "item"
                }`}
              >
                {item}
              </button>
            );
          }
          return <p aria-disabled style={{ pointerEvents: "none" }}>{DOTS}</p>;
        })}
      </div>
    </div>
  );
};
