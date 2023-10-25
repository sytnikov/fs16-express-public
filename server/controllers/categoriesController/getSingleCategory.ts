import { NextFunction, Request, Response } from "express";

import { categoriesData } from "../../data/categoriesData";
import { ApiError } from "../../middlewares/errors/ApiError";

export function getSingleCategory (req: Request, res: Response, next: NextFunction) { 
  const id = Number(req.params.categoryId)
  const categoryData = categoriesData[id-1]
  if (!categoryData) {
    next(ApiError.resourceNotFound("The category id is not in the system"))
    return
  }
  res.status(200).json(categoryData)
} 