import express from "express";

import ctrl from "../controllers/users";

const router = express.Router();
router.post("/", ctrl.addUser);
// others routers

export default router;
