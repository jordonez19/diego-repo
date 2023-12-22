import { Router } from "express";
import * as users from "../controllers/userscontroller";

const router = Router();



router.post("/login", users.login);
router.get("/get", users.getdata);
router.get("/get/:email", users.getdatabyid);
router.get("/post", users.postdata);
router.get("/put", users.putdata);

export default router;
