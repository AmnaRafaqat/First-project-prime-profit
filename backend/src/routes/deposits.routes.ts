import { Router } from "express";
import { depositNow, listDepositHistory } from "../controllers/deposits.controller.js";

const router = Router();

router.post("/deposit", depositNow);
router.get("/deposits", listDepositHistory);

export default router;


