import { NextFunction, Request, Response } from "express";

import { categoriesData } from "../../data/categoriesData";
import { ApiError } from "../../middlewares/errors/ApiError";
import categoriesService from "../../services/categoriesService";

export function createCategory(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const newCategoryData = req.body;
  const categoryName = categoriesService
    .getAll()
    .find(
      (cat) => cat.name.toLowerCase() === newCategoryData.name.toLowerCase()
    );
  if (!categoryName) {
    newCategoryData.id = categoriesService.getAll().length + 1;
    const newCategory = categoriesService.createCategory(newCategoryData);
    res.status(201).json(newCategory);
    return;
  }
  next(ApiError.badRequest("The category with this name already exists"));
}
