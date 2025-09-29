import { Router } from "express";
import { addReferral, getTeam, getReferralCommission } from "../controllers/team.controller.js";

const router = Router();

router.get("/team", getTeam);
router.get("/referral/commission", getReferralCommission);
router.post("/referral", addReferral);

export default router;


