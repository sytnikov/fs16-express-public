import { Request, Response } from "express";
import { authorSchema } from "../../schemas/authorSchema";

export const addAuthor =  (req: Request, res: Response) => {
  const newAuthor = req.body;
  //validation req body
  const { error } = authorSchema.validate(newAuthor);
  if (error) {
    res.status(400).json(error.details[0].message);
  }
};
