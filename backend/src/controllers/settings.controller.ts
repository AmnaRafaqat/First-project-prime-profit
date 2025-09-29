import { Request, Response } from "express";
import { SettingModel } from "../models/setting.model.js";

export async function getSettings(req: Request, res: Response) {
  const user = String(req.query.user ?? "");
  if (!user) return res.status(400).json({ error: "user query required" });
  const settings = await SettingModel.findOne({ user }).lean();
  res.json(settings ?? { user });
}

export async function updateSettings(req: Request, res: Response) {
  const { user, walletAddress, notificationEmail, language } = req.body ?? {};
  if (!user) return res.status(400).json({ error: "user required" });
  const next = await SettingModel.findOneAndUpdate(
    { user },
    { $set: { walletAddress, notificationEmail, language } },
    { upsert: true, new: true }
  );
  res.json(next);
}


