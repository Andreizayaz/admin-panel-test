import { useSelector } from "react-redux";
import { selectTransactions } from "../store";
import { modifyTransactionList } from "../helpers/functions";
import { useState } from "react";

export const useTransactions = () => {
  const transactions = useSelector(selectTransactions);
  const [modTransactions, setModTransactions] = useState<any>(null);
  if (transactions) {
    console.log(modifyTransactionList(transactions));
  }

  return { modTransactions };
};
