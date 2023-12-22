import { Router } from "express";
import * as news from "../controllers/newscontroller";

const router = Router();

router.get("/get/:id?", news.getData);
router.get("/post", news.postdata);
router.get("/put", news.putdata);

export default router;
