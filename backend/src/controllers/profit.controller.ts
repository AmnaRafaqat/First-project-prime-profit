import { Request, Response } from "express";
import { previewSchema } from "../validators/schemas.js";
import { plans } from "../models/plans.js";

export function previewProfit(req: Request, res: Response) {
  const parsed = previewSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: parsed.error.flatten() });
  const { amount, hours, planId } = parsed.data;

  const plan = plans.find(p => p.id === planId) ?? plans[0];
  const maxHours = 24 * plan.durationDays;
  if (hours > maxHours) {
    return res.status(400).json({
      error: {
        fieldErrors: {
          hours: [`Hours cannot exceed ${maxHours} for ${plan.name}`],
        },
        formErrors: [],
      },
    });
  }

  const hourlyRate = plan.twentyFourHourProfit / 24;
  const profit = Number((hours * hourlyRate * (amount / plan.invest)).toFixed(3));
  res.json({ amount, hours, profit, planId: plan.id });
}
