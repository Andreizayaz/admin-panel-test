import { useMemo, useState, MouseEvent, useEffect } from "react";
import { DOTS } from "../helpers/consts";
import { range } from "../helpers/functions";

export const usePagination = (
  pageSize: number,
  totalCount: number,
  siblingCount: number
) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [start, setStart] = useState(currentPage);
  const [end, setEnd] = useState(pageSize);
  const [totalPageCount, setTotalPageCount] = useState(
    Math.ceil(totalCount / pageSize)
  );

  console.log(totalCount);
  const handlePagination = (
    e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>
  ) => {
    if (!isNaN(parseInt((e.target as HTMLButtonElement).id))) {
      setCurrentPage(parseInt((e.target as HTMLButtonElement).id));
    }
  };

  const handleNav = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
    const isPrev =
      (e.target as HTMLButtonElement).id === "prev" && currentPage > 0;
    const isNext =
      (e.target as HTMLButtonElement).id === "next" &&
      currentPage < totalCount - 1;
    if (isPrev) {
      setCurrentPage((prev) => prev - 1);
    }

    if (isNext) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    setTotalPageCount(Math.ceil(totalCount / pageSize));
    setCurrentPage(0);
  }, [totalCount, pageSize]);

  useEffect(() => {
    setStart(currentPage * pageSize);
  }, [currentPage, pageSize]);

  useEffect(() => {
    setEnd(start + pageSize);
  }, [start, pageSize]);

  const paginationRage = useMemo(() => {
    const totalPageNumbers = siblingCount * 2 + 2 + 1;
    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount);
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(
      currentPage + siblingCount,
      totalPageCount
    );

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPageCount;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      let leftItemCount = 2 + 2 * siblingCount;
      let leftRange = range(1, leftItemCount);

      return [...leftRange, DOTS, totalPageCount];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      let rightItemCount = 2 + 2 * siblingCount;
      let rightRange = range(
        totalPageCount - rightItemCount + 1,
        totalPageCount
      );
      return [firstPageIndex, DOTS, ...rightRange];
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      let middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
    }
  }, [siblingCount, currentPage, totalPageCount]);

  return {
    start,
    end,
    currentPage,
    paginationRage,
    totalPageCount,
    handlePagination,
    handleNav,
  };
};
