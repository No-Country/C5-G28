import { Router } from "express";
import { save, remove, getAll } from "../controllers/follow.controller";
const router = Router();

router.get("/:id/follow/:followid", save);
router.delete("/:id/follow/:followid", remove);
router.get("/:id/follow", getAll);

export default router;
