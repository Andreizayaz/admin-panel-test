import { useSelector } from "react-redux";
import { selectTransactions } from "../store";
import { modifyTransactionList } from "../helpers/functions";
import { useEffect, useState } from "react";

export const useTransactions = () => {
  const transactions = useSelector(selectTransactions);
  const [modTransactions, setModTransactions] = useState<any>(null);

  useEffect(() => {
    if (transactions) {
      setModTransactions(modifyTransactionList(transactions));
    }
  }, [transactions]);

  return { modTransactions };
};
