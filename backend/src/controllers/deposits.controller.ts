import { Request, Response } from "express";
import { InvestmentModel } from "../models/investment.model.js";
import { investSchema } from "../validators/schemas.js";

export async function depositNow(req: Request, res: Response) {
  const parsed = investSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: parsed.error.flatten() });
  const { user, amount, planId } = parsed.data;

  const created = await InvestmentModel.create({ user, amount, planId: planId ?? "plan1" });
  res.status(201).json(created);
}

export function listDepositHistory(req: Request, res: Response) {
  const user = String(req.query.user ?? "");
  const query = user ? { user } : {};
  InvestmentModel.find(query).sort({ createdAt: -1 }).then(list => res.json(list));
}


