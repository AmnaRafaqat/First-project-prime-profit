import { Router } from "express";

import { getAllPlans, getDefaultPlan } from "../controllers/plans.controller.js";

const router = Router();

router.get("/plan", getDefaultPlan);
router.get("/plans", getAllPlans);

export default router;


