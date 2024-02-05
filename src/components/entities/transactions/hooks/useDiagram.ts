import { useSelector } from "react-redux";
import { selectTransactions } from "../store";
import { useState } from "react";

export const useDiagram = () => {
  const transactions = useSelector(selectTransactions);

  const [chartData] = useState({
    labels: transactions?.map(({ transactionData: { created_at } }) =>
      new Date(created_at).toLocaleDateString()
    ),
    datasets: [
      {
        data: transactions?.map(({ transactionData: { amount } }) => amount),
        borderColor: "#1C64F2",
        borderWidth: 2,
        pointStyle: false,
      },
    ],
  });

  return { chartData };
};
