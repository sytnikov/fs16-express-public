import { Author } from "./Author";
import { Category } from "./Category";

export interface Book {
  id: number;
  name: string;
  price: number;
  author: Author
  category: Category;
}
