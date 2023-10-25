import { NextFunction, Request, Response } from "express";

import { categoriesData } from "../../data/categoriesData";
import { ApiError } from "../../middlewares/errors/ApiError";

export function getAllCategories(
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (categoriesData) {
    res.status(200).json(categoriesData);
    return
  }
  next(ApiError.resourceNotFound("Categories data not found"));
}
