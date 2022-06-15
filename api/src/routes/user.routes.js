import { Router } from "express";
import { getByPreferences } from "../controllers/user.controller";

const router = Router();

router.get("/preferences", getByPreferences);

export default router;
