import express from "express";

import ctrl from "../controllers/authors";

const router = express.Router();
router.post("/", ctrl.addAuthor);
// others routers

export default router;
