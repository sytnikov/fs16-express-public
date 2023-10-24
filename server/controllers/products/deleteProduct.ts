import { NextFunction, Request, Response } from "express";

import { productsData } from "../../data/productsData";
import { ApiError } from "../../middlewares/errors/apiErrorHandler";

export const deleteProduct = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.params.id;
  const index = productsData.findIndex((i) => i.id === +id);
  if (index === -1) {
    next(ApiError.resourceNotFound("Product id is not found"));
    return;
  }
  productsData.splice(index, 1);
  res.status(200).json({ message: "Product deleted successfully" });
};
