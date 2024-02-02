export type transactionType = {
  id: string;
  userId: string;
  transactionData: {
    amount: number;
    currency: string;
    type: string;
    status: string;
    created_at: string;
  };
};
