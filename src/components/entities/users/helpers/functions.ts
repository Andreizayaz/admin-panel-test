import axios from "src/http";
import { userType } from "../store/types";
import { TOKENS_FIELD, TOKENS_UNIT } from "./consts";

export const getUsers = async (url: string): Promise<userType[]> => {
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
