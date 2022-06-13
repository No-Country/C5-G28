import { Router } from "express";
import {
  signUp,
  signIn,
  forgotPassword,
  createNewPassword,
  confirmAccount,
  edit
} from "../controllers/auth.controller";

const router = Router();
//login Routes
router.post("/signup", signUp);
router.post("/signin", signIn);
router.get("/confirm-account/:confirmToken", confirmAccount);
router.put("/forgot-password", forgotPassword);
router.put("/new-password", createNewPassword);
router.put("/edit/:id",edit);


export default router;
