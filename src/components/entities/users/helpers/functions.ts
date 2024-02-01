import axios from "src/http";
import { userType } from "../store/types";
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
