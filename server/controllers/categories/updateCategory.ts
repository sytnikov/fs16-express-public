import { NextFunction, Request, Response } from "express";

import { categoriesData } from "../../data/categoriesData";
import { ApiError } from "../../middlewares/errors/ApiError";

export function updateCategory(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const id = Number(req.params.categoryId);
  const foundIndex = categoriesData.findIndex((cat) => cat.id === id);
  if (foundIndex === -1) {
    next(ApiError.resourceNotFound("The category not found"));
    return;
  }
  const { name, images } = req.body;
  const nameExist = categoriesData.findIndex(
    (cat) => cat.name.toLowerCase() === name.toLowerCase()
  );
  if (nameExist !== -1) {
    next(ApiError.badRequest("The category with this name already exists"));
    return;
  }
  const updatedCategory = {
    id: id,
    name: name || categoriesData[foundIndex].name,
    images: images || categoriesData[foundIndex].images,
  };
  categoriesData.splice(foundIndex, 1, updatedCategory);
  res.status(200).json(updatedCategory);
}
