export type userType = {
  id: string;
  userData: {
    email: string;
    username: string;
    role: string;
    subscriptionStatus: string;
    tokens: number;
  };
};

type userDataType = {
  email: string;
  username: string;
  role: string;
  subscriptionStatus: string;
  tokens: number;
};

export type sortType = {
  sortKey: keyof userDataType;
  isDescSort: boolean;
};
