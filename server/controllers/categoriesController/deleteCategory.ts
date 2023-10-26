import { NextFunction, Request, Response } from "express";

import { ApiError } from "../../middlewares/errors/ApiError";
import categoriesService from "../../services/categoriesService";

export function deleteCategory (req: Request, res: Response, next: NextFunction) {
  const id = Number(req.params.categoryId)
  const categoriesData = categoriesService.getAll()
  const foundIndex = categoriesData.findIndex(cat => cat.id === id)
  if (foundIndex !== -1) {
    categoriesService.deleteCategory(foundIndex)
    res.status(200).json(categoriesData)
    return
  }
  next(ApiError.resourceNotFound("Category can't be deleted"))
}