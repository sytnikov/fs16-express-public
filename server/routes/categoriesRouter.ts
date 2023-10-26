import express from "express";

import controller from "../controllers/categoriesController"

const categoriesRouter = express.Router();

categoriesRouter.get("/", controller.getAllCategories);
categoriesRouter.get("/:categoryId", controller.getSingleCategory);
categoriesRouter.post("/", controller.createCategory)
categoriesRouter.put("/:categoryId", controller.updateCategory)
categoriesRouter.delete("/:categoryId", controller.deleteCategory)

export default categoriesRouter