import { Request, Response } from "express";
import { InvestmentModel } from "../models/investment.model.js";
import { WithdrawalModel } from "../models/withdrawal.model.js";

export async function listAllTransactions(req: Request, res: Response) {
  const user = String(req.query.user ?? "");
  const query = user ? { user } : {};
  const [deposits, withdraws] = await Promise.all([
    InvestmentModel.find(query).lean(),
    WithdrawalModel.find(query).lean(),
  ]);
  const transactions = [
    ...deposits.map(d => ({ type: "deposit", id: String(d._id), amount: d.amount, createdAt: d.createdAt, planId: d.planId })),
    ...withdraws.map(w => ({ type: "withdraw", id: String(w._id), amount: w.amount, createdAt: w.createdAt, planId: w.planId, status: w.status })),
  ].sort((a, b) => Number(b.createdAt) - Number(a.createdAt));
  res.json(transactions);
}


