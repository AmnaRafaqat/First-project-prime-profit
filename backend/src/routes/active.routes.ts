import { Router } from "express";
import { listMyActivePlans, withdrawActive } from "../controllers/active.controller.js";

const router = Router();

router.get("/active", listMyActivePlans);
router.post("/active/withdraw", withdrawActive);

export default router;


