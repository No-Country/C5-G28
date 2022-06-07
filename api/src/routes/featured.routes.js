import { Router } from "express";
import { featured } from "../controllers/featured.controller";

const router = Router();

//featured Routes
router.get("/featured/:i",featured);


export default router;
