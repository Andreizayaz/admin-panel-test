import { useDispatch } from "react-redux";
import {  sortUsers } from "../store";
import { useState } from "react";
import {
  TOKENS,
  TOKENS_SORT_KEY,
  headings,
} from "../helpers/consts";

export const useSort = () => {
  const dispatch = useDispatch();
  const [isDescSort, setIsAscSort] = useState(false);

  const sortByTokens = () => {
    setIsAscSort(!isDescSort);
    dispatch(sortUsers({ isDescSort, sortKey: TOKENS_SORT_KEY }));
  };

  const currHeadings = headings.map((item) => {
    if (item.heading === TOKENS) {
      return {
        ...item,
        classes: `${!isDescSort ? "sort" : "sort sort_desc"}`,
        clickHandler: sortByTokens,
      };
    }

    return { ...item };
  });

  return { currHeadings };
};
