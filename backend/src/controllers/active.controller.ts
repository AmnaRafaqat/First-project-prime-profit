import { Request, Response } from "express";
import { InvestmentModel } from "../models/investment.model.js";
import { WithdrawalModel } from "../models/withdrawal.model.js";
import { withdrawSchema } from "../validators/schemas.js";

export function listMyActivePlans(req: Request, res: Response) {
  const user = String(req.query.user ?? "");
  const query = user ? { user } : {};
  InvestmentModel.find(query).sort({ createdAt: -1 }).then(list => res.json(list));
}

export async function withdrawActive(req: Request, res: Response) {
  const parsed = withdrawSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: parsed.error.flatten() });
  const { user, amount, planId } = parsed.data;
  const record = await WithdrawalModel.create({ user, amount, planId });
  res.status(201).json(record);
}


