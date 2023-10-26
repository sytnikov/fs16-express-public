import { Request, Response, NextFunction } from "express";
import { uptadeProductSchema, productSchema } from "../schemas/productSchema";

export const validateProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    req.method === "POST"
      ? await productSchema.parseAsync({
          body: req.body,
          query: req.query,
          params: req.params,
        })
      : await uptadeProductSchema.parseAsync(req.body);

    return next();
  } catch (error) {
    return res.status(400).json(error);
  }
};
