import { Request, Response } from "express";
import { plans } from "../models/plans.js";


export function getDefaultPlan(_req: Request, res: Response) {
  res.json(plans[0]);
}

export function getAllPlans(_req: Request, res: Response) {
  res.json(plans);
}





