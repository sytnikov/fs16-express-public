import express from "express";

import ctrl from "../controllers/categories";

const router = express.Router();
router.post("/", ctrl.addCategory);
// others routers

export default router;
