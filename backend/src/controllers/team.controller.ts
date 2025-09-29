import { Request, Response } from "express";
import { ReferralModel } from "../models/referral.model.js";

export async function addReferral(req: Request, res: Response) {
  const { user, referredUser, commission } = req.body ?? {};
  if (!user || !referredUser || typeof commission !== "number") {
    return res.status(400).json({ error: "user, referredUser, commission required" });
  }
  const record = await ReferralModel.create({ user, referredUser, commission });
  res.status(201).json(record);
}

export function getTeam(req: Request, res: Response) {
  const user = String(req.query.user ?? "");
  const query = user ? { user } : {};
  ReferralModel.find(query).sort({ createdAt: -1 }).then(list => res.json(list));
}

export async function getReferralCommission(req: Request, res: Response) {
  const user = String(req.query.user ?? "");
  const query = user ? { user } : {};
  const list = await ReferralModel.find(query).lean();
  const total = list.reduce((sum, r) => sum + Number(r.commission), 0);
  res.json({ user: user || undefined, totalCommission: total });
}


