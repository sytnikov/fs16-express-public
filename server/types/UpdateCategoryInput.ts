import { Category } from "./Category";

export type UpdateCategoryInput = Partial<Omit<Category, "id">>