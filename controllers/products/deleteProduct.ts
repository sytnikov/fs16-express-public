import { Request, Response } from "express";

import { productsData } from "../../data/productsData";

export const deleteProduct = (req: Request, res: Response) => {
  const id = req.params.id;
  const index = productsData.findIndex((i) => i.id === +id);
  if (index === -1) {
    res.status(404).json({ message: "Product id is not found" });
  }
  productsData.splice(index, 1);
  res.status(200).json({ message: "Product deleted successfully" });
};
