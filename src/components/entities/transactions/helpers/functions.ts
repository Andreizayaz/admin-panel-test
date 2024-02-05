import { transactionType } from "../store";
import {
  REPLENISH,
  STATUS_SUCCEDED,
  SYSTEM_TOKEN,
  WRITE_OFF,
  token,
  transactionTr,
} from "./consts";
import { transactionAmountType } from "./types";

const getAmount = (transaction: transactionAmountType) => {
  const { amount, currency, type } = transaction;

  if (type === WRITE_OFF) {
    return `-${amount.toLocaleString()} ${
      token[currency as keyof typeof token] ?? ""
    }`;
  }

  if (type === REPLENISH) {
    return `+${amount.toLocaleString()} ${
      token[currency as keyof typeof token] ?? ""
    }`;
  }

  return `${amount.toLocaleString()}`;
};

const getDate = (date: string) => {
  const trDate = new Date(date);

  const locDate = trDate
    .toLocaleDateString()
    .split(" ")
    .map((item, index) =>
      index === 0 ? item.slice(0, 6) + item.slice(-2) : item
    );
  const locTime = trDate.toLocaleTimeString();

  return `${locDate}, ${locTime}`;
};

const getClassesForAmount = (type: string) => {
  if (type === WRITE_OFF) {
    return "write-off";
  }

  if (type === REPLENISH) {
    return "replenish";
  }

  return "";
};

export const modifyTransactionList = (transactions: transactionType[]) => {
  return transactions.map(({ id, transactionData }) => {
    return {
      id,
      transactionData: [
        {
          content:
            transactionTr[transactionData.type as keyof typeof transactionTr] ??
            "",
        },
        {
          content: getAmount(transactionData),
          classes: getClassesForAmount(transactionData.type),
        },
        {
          content: getDate(transactionData.created_at),
        },
      ],
    };
  });
};
