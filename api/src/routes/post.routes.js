import { Router } from "express";
import {create,remove,search,edit} from '../controllers/post.controller';
const router = Router();

//post Routes

router.post("/save",create)
router.delete("/delete/:id",remove)
router.get("/search/:search",search)
router.put("/edit/:id",edit)
export default router;