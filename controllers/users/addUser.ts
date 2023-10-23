import { Request, Response } from "express";
import { userSchema } from "../../schemas/userSchema";

export const addUser = (req: Request, res: Response) => {
  const newUser = req.body;
  //validation req body
  const { error } = userSchema.validate(newUser);
  if (error) {
    res.status(400).json(error.details[0].message);
  }
};
