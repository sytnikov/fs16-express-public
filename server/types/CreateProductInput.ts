import { Product } from "./Product";

export interface CreateProductInput extends Omit<Product, "id"> {
  categoryId?: number;
  id: number; 
}
