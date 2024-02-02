import { FormEvent } from "react";
import { useDispatch } from "react-redux";

import { findUsers } from "../store";

export const useSearch = () => {
  const dispatch = useDispatch();

  const handleInput = (e: FormEvent<HTMLInputElement>) =>
    dispatch(findUsers(e.currentTarget.value));

  return { handleInput };
};
