import { Request, Response } from "express";

import { bookSchema } from "../../schemas/bookSchema";
import { booksData } from "../../data/booksData";

export const addBook =  (req: Request, res: Response) => {
  const newBook = req.body;
  const { error } = bookSchema.validate(newBook);
  if (error) {
    res.status(400).json(error.details[0].message);
  }
  const category = booksData.find((i) => i.id === newBook.categoryId);
  if (!category) {
    res.status(404).json({ message: "CategoryId is not found" });
  }
  newBook.id = booksData.length + 1;
  booksData.push(newBook);
  res.status(201).json(booksData);
};
