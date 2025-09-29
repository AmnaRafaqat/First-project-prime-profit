import { Request, Response } from "express";
import { InvestmentModel } from "../models/investment.model.js";
import { WithdrawalModel } from "../models/withdrawal.model.js";

export async function getDashboard(req: Request, res: Response) {
  const user = String(req.query.user ?? "guest");
  const query = { user };
  const [userInvestments, userWithdrawals] = await Promise.all([
    InvestmentModel.find(query).lean(),
    WithdrawalModel.find(query).lean(),
  ]);
  const totalDeposited = userInvestments.reduce((sum, i) => sum + Number(i.amount), 0);
  const totalWithdrawn = userWithdrawals
    .filter(w => w.status === "approved")
    .reduce((sum, w) => sum + Number(w.amount), 0);
  res.json({
    user,
    totalDeposited,
    totalWithdrawn,
    activePlans: userInvestments.length,
    depositsCount: userInvestments.length,
    withdrawalsCount: userWithdrawals.length,
  });
}


