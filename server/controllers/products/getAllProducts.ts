import { NextFunction, Request, Response } from "express";
import { productsData } from "../../data/productsData";
import { ApiError } from "../../middlewares/errors/ApiError";

export const getAllProducts = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (productsData) {
    res.status(200).json(productsData);
    return;
  }
  next(ApiError.resourceNotFound("Products data not found"));
};
