import { Request, Response } from "express";
import { productsData } from "../../data/productsData";

export const getAllProducts = (req: Request, res: Response) => {
  if (productsData) {
    res.status(200).json(productsData);
  } else {
    res.status(404).json({ error: "Products data not found" });
  }
};
