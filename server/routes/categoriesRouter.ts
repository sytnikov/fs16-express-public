import express from "express";

import { getAllCategories } from "../controllers/categories/getAllCategories";
import { getSingleCategory } from "../controllers/categories/getSingleCategory";
import { deleteCategory } from "../controllers/categories/deleteCategory";
import { createCategory } from "../controllers/categories/createCategory";
import { updateCategory } from "../controllers/categories/updateCategory";

export const categoriesRouter = express.Router();

categoriesRouter.get("/", getAllCategories);
categoriesRouter.get("/:categoryId", getSingleCategory);
categoriesRouter.post("/", createCategory)
categoriesRouter.put("/:categoryId", updateCategory)
categoriesRouter.delete("/:categoryId", deleteCategory)
