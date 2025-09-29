import { Router } from "express";
import { listAllTransactions } from "../controllers/transactions.controller.js";

const router = Router();

router.get("/transactions", listAllTransactions);

export default router;


