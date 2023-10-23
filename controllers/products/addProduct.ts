import { Request, Response } from "express";

import { productSchema } from "../../schemas/productSchema";
import { productsData } from "../../data/productsData";

export const addProduct = (req: Request, res: Response) => {
  const newBook = req.body;
  const { error } = productSchema.validate(newBook);
  if (error) {
    res.status(400).json(error.details[0].message);
  }
  const category = productsData.find((i) => i.id === newBook.categoryId);
  if (!category) {
    res.status(404).json({ message: "CategoryId is not found" });
  }
  newBook.id = productsData.length + 1;
  productsData.push(newBook);
  res.status(201).json(productsData);
};
