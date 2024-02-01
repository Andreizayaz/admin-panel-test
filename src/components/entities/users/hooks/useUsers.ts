import { useDispatch, useSelector } from "react-redux";
import { selectUsers, setUsers, sortUsers } from "../store";
import { useEffect, useState } from "react";
import {
  TOKENS,
  TOKENS_SORT_KEY,
  USERS_URL,
  headings,
} from "../helpers/consts";
import { getUsers } from "../helpers/functions";

export const useUsers = () => {
  const users = useSelector(selectUsers);
  const dispatch = useDispatch();
  const [isDescSort, setIsAscSort] = useState(false);

  const sortByTokens = () => {
    setIsAscSort(!isDescSort);
    dispatch(sortUsers({ isDescSort, sortKey: TOKENS_SORT_KEY }));
  };

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
      return {
        ...item,
        classes: `${!isDescSort ? "sort" : "sort sort_desc"}`,
        clickHandler: sortByTokens,
      };
    }

    return { ...item };
  });

  useEffect(() => {
    getUsers(USERS_URL).then((data) => dispatch(setUsers(data)));
  }, []);

  return { currUsers, currHeadings };
};
