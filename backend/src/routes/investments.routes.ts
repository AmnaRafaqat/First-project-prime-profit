import { Router } from "express";
import { createInvestment, listInvestments } from "../controllers/investments.controller.js";

const router = Router();

router.post("/investments", createInvestment);
router.get("/investments", listInvestments);

export default router;


