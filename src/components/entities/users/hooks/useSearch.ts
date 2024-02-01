import { FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findUsers, selectUsers } from "../store";

export const useSearch = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);

  const handleInput = (e: FormEvent<HTMLInputElement>) => {
    debugger;
    const result = users.filter(({ userData }) => 
      Object.values(userData)
        .map((item) => item.toString().toLowerCase())
        .some((item) => item.includes(e.currentTarget.value.toLowerCase())))
        console.log(result)
    dispatch(findUsers(e.currentTarget.value));
  };

  return { handleInput };
};
