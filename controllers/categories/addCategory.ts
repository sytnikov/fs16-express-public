import { Request, Response } from "express";
import { categorySchema } from "../../schemas/categorySchema";

export const addCategory =  (req: Request, res: Response) => {
  const newCategory = req.body;
  //validation req body
  const { error } = categorySchema.validate(newCategory);
  if (error) {
    res.status(400).json(error.details[0].message);
  }
};
