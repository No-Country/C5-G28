import { Router } from "express";
import { save, remove, getAll } from "../controllers/follow.controller";
const router = Router();

router.put("/follow/save/:id", save);
router.put("/follow/delete/:id", remove);
router.get("/:id/follow", getAll);

export default router;
