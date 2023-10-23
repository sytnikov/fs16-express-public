import { Request, Response } from "express";

import { booksData } from "../../data/booksData";

export const deleteBook =  (req: Request, res: Response) => {
  const id = req.params.id;
  const index = booksData.findIndex((i) => i.id === +id);
  if (index === -1) {
    res.status(404).json({message: "Product id is not found"})
  }
  booksData.splice(index, 1)
  res.status(200).json({ message: "Book deleted successfully" });
};
