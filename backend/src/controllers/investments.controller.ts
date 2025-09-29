import { Request, Response } from "express";
import { investSchema } from "../validators/schemas.js";
import { investments, Investment } from "../models/investments.js";
import { plans } from "../models/plans.js";

export function createInvestment(req: Request, res: Response) {
  const parsed = investSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: parsed.error.flatten() });
  const { user, amount, planId } = parsed.data;
  const plan = plans.find(p => p.id === planId) ?? plans[0];
  const investment: Investment = {
    id: Math.random().toString(36).slice(2),
    user,
    amount,
    planId: plan.id,
    createdAt: Date.now(),
  };
  investments.push(investment);
  res.status(201).json(investment);
}

export function listInvestments(_req: Request, res: Response) {
  res.json(investments);
}


