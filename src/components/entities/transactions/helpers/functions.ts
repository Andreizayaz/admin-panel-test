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

export const modifyTransactionList = (transactions: transactionType[]) => {
  return transactions
    .filter(({ transactionData: { status } }) => status === STATUS_SUCCEDED)
    .map(({ id, transactionData }) => {
      return {
        id,
        transactionData:{

          type:
            transactionTr[transactionData.type as keyof typeof transactionTr] ??
            "",
          amount: getAmount(transactionData),
          date: getDate(transactionData.created_at),
        }
      };
    });
};
