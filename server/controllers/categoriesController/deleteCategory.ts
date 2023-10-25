import { NextFunction, Request, Response } from "express";

import { categoriesData } from "../../data/categoriesData";
import { ApiError } from "../../middlewares/errors/ApiError";

export function deleteCategory (req: Request, res: Response, next: NextFunction) {
  const id = Number(req.params.categoryId)
  const foundIndex = categoriesData.findIndex(cat => cat.id === id)
  if (foundIndex !== -1) {
    categoriesData.splice(id - 1, 1)
    res.status(200).json(categoriesData)
    return
  }
  next(ApiError.resourceNotFound("Category can't be deleted"))
}