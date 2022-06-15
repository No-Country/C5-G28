import { Router } from "express";
import {
  signUp,
  signIn,
  forgotPassword,
  createNewPassword,
  confirmAccount,
  edit,
  editProfile
} from "../controllers/auth.controller";

const router = Router();
//login Routes
router.post("/signup", signUp);
router.post("/signin", signIn);
router.get("/confirm-account/:confirmToken", confirmAccount);
router.put("/forgot-password", forgotPassword);
router.put("/new-password", createNewPassword);
router.put("/edit/:id",edit);
router.put("/editprofile",editProfile);


export default router;
