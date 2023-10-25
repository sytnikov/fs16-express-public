import { NextFunction, Request, Response } from "express";

import { ApiError } from "../../middlewares/errors/ApiError";
import categoriesService from "../../services/categoriesService";

export function updateCategory(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const id = Number(req.params.categoryId);
  const categoriesData = categoriesService.getAll();
  const category = categoriesData.find((cat) => cat.id === id);
  if (category) {
    const { name, images } = req.body;
    const updatedCategoryData = {
      id: id,
      name: name || category.name,
      images: images || category.images,
    };
    const foundIndex = categoriesData.findIndex((cat) => cat.id === id);
    const updatedCategory = categoriesService.updateCategory(
      foundIndex,
      updatedCategoryData
    );
    res.status(200).json(updatedCategory);
    return;
  }
  next(ApiError.resourceNotFound("The category not found"));
}
