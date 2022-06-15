import { Router } from "express";
import {
  create,
  remove,
  search,
  edit,
  like,
  dislike,
  getByCategories,
  getAll,
  getByPreferences,
} from "../controllers/post.controller";
const router = Router();

//post Routes

router.post("/save/", create);
router.delete("/delete/:id", remove);
router.get("/search/:search", search);
router.put("/edit/:id", edit);
router.put("/like/:id", like);
router.put("/dislike/:id", dislike);
router.get("/categories/:category", getByCategories);
router.get("/", getAll);
export default router;
