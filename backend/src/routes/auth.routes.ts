import { Router } from "express";
import { loginUser, logoutUser, registerUser, renderLoginPage, renderRegisterPage, renderLogoutPage } from "../controllers/auth.controller.js";

const router = Router();

router.post("/auth/register", registerUser);
router.post("/auth/login", loginUser);
router.post("/auth/logout", logoutUser);

// demo pages
router.get("/auth/login", renderLoginPage);
router.get("/auth/register", renderRegisterPage);
router.get("/auth/logout", renderLogoutPage);

export default router;


