import { NextFunction, Request, Response } from "express";

import { productsData } from "../../data/productsData";
import { ApiError } from "../../middlewares/errors/ApiError";

export const addProduct = (req: Request, res: Response, next: NextFunction) => {
  const newBook = req.body;
  const category = productsData.find((i) => i.id === newBook.categoryId);
  if (!category) {
    next(ApiError.resourceNotFound("CategoryId is not found"));
    return;
  }
  newBook.id = productsData.length + 1;
  productsData.push(newBook);
  res.status(201).json(productsData);
};
