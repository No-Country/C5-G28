import { Router } from "express";
import {
  signUp,
  signIn,
  forgotPassword,
  createNewPassword,
  confirmAccount,
} from "../controllers/auth.controller";

const router = Router();

router.post("/signup", signUp);
router.post("/signin", signIn);
router.post("/confirm-account/:confirmToken", confirmAccount);
router.put("/forgot-password", forgotPassword);
router.put("/new-password", createNewPassword);

export default router;
