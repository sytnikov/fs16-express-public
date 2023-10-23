import { Request, Response } from "express";
import { booksData } from "../../data/booksData";

export const getAllBooks =  (req: Request, res: Response) => {
if (booksData) {
  res.status(200).json(booksData);
} else {
  res.status(404).json({ error: "Books data not found" });
}
};
