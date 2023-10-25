import { NextFunction, Request, Response } from "express";

import { categoriesData } from "../../data/categoriesData";
import { ApiError } from "../../middlewares/errors/ApiError";

export function getSingleCategory (req: Request, res: Response, next: NextFunction) { 
  const id = Number(req.params.categoryId)
  if (id) {
    res.status(200).json({categoryData: categoriesData[id-1]})
  }
  next(ApiError.resourceNotFound("The category not found, consider another category id"))
} 