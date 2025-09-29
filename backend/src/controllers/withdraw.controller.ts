import { Request, Response } from "express";
import { withdrawSchema } from "../validators/schemas.js";
import { plans } from "../models/plans.js";

export function requestWithdraw(req: Request, res: Response) {
  const parsed = withdrawSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: parsed.error.flatten() });
  const { amount, planId } = parsed.data;
  const plan = plans.find(p => p.id === planId) ?? plans[0];
  if (amount < plan.minWithdraw) {
    return res.status(400).json({ error: `Minimum withdraw is ${plan.minWithdraw} USD` });
  }
  res.json({ status: "requested", ...parsed.data, planId: plan.id });
}


