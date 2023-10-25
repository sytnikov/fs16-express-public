import { Request, Response, NextFunction } from "express";
import { productSchema } from "../schemas/productSchema";
import { ApiError } from "./errors/ApiError";

export const validateProduct = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const newProduct = req.body;
  const { error } = productSchema.validate(newProduct);
  if (error) {
    next(ApiError.badRequest(error.details[0].message));
    return;
  }
  next();
};
