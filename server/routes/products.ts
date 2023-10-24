import express from "express";

import ctrl from "../controllers/products";
import { validateProduct } from "../middlewares/validateProduct";

const router = express.Router();
router.get("/", ctrl.getAllProducts);
router.post("/", validateProduct, ctrl.addProduct);
router.delete("/:id", ctrl.deleteProduct);

export default router;
