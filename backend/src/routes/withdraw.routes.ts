import { Router } from "express";
import { requestWithdraw } from "../controllers/withdraw.controller.js";

const router = Router();

router.post("/withdraw", requestWithdraw);

export default router;


