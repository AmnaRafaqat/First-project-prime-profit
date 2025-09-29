import { Router } from "express";
import { previewProfit } from "../controllers/profit.controller.js";

const router = Router();

router.post("/profit/preview", previewProfit);

export default router;


