export type Withdrawal = {
  id: string;
  user: string;
  amount: number;
  planId?: string;
  createdAt: number;
  status: "requested" | "approved" | "rejected";
};

export const withdrawals: Withdrawal[] = [];


