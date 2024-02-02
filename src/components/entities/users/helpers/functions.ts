import axios from "src/http";
import { userType } from "../store/types";
import { TOKENS_FIELD, TOKENS_UNIT, TRANSACTIONS, USER } from "./consts";

export const getUsers = async (
  url: string
): Promise<userType[] | undefined> => {
  try {
    const response = await axios.get(url);
    const users: Array<any> = await response.data.data;
    return users.map((user) => {
      return {
        id: user?.id,
        userData: {
          email: user?.email,
          username: user?.name,
          role: user?.role,
          subscriptionStatus: user?.subscription?.plan?.type,
          tokens: user?.subscription?.tokens,
        },
      };
    });
  } catch (error) {
    console.log(error);
  }
};

export const modifyUserList = (users: userType[]) => {
  return users.map(({ id, userData }) => {
    return {
      id,
      userData: Object.entries(userData).map((item) => {
        if (item[0] === TOKENS_FIELD) {
          return {
            content: `${item[1]} ${TOKENS_UNIT}`,
          };
        }
        return { content: item[1] };
      }),
    };
  });
};

export const getTransactions = async (userId: string): Promise<any> => {
  try {
    const transactionsUrl = `${USER}/${userId}/${TRANSACTIONS}`;
    const response = await axios.get(transactionsUrl);
    const transactions = await response.data;
    return transactions.map((item: any) => {
      return {
        id: item?.id,
        userId: item?.user_id,
        transactionData: {
          amount: item?.amount,
          status: item?.status,
          currency: item?.currency,
          type: item?.type,
          created_at: item?.created_at,
        },
      };
    });
  } catch (error) {
    console.log(error);
  }
};
