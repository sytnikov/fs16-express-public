import express from "express";

import ctrl from "../controllers/products";

const router = express.Router();
router.get("/", ctrl.getAllProducts);
router.post("/", ctrl.addProduct);
router.delete("/:id", ctrl.deleteProduct);

export default router;
