import { NextFunction, Request, Response } from "express";

import { categoriesData } from "../../data/categoriesData";
import { ApiError } from "../../middlewares/errors/ApiError";
import { Category } from "../../types/Category";

export function createCategory(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const newCategory: Category = req.body;
  const nameExist = categoriesData.findIndex(
    (cat) => cat.name.toLowerCase() === newCategory.name.toLowerCase()
  );
  if (nameExist === -1) {
    // need to add validation
    newCategory.id = categoriesData.length + 1;
    categoriesData.push(newCategory);
    res.status(201).json(newCategory);
    return;
  }
  next(ApiError.badRequest("The category with this name already exists"));
}
