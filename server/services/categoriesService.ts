import { CategoryRepo } from "../models/CategoryModel";
import { Category } from "../types/Category";

const categoriesRepo = new CategoryRepo();

function getAll() {
  const categories = categoriesRepo.getAll();
  return categories;
}

function getSingle(categoryId: number) {
  const category = categoriesRepo.getSingle(categoryId);
  return category;
}

function createCategory(category: Category) {
  const newCategory = categoriesRepo.createCategory(category);
  return newCategory;
}

function updateCategory(index: number, category: Category) {
  const updatedCategory = categoriesRepo.updateCategory(index, category)
  return updatedCategory
}

function deleteCategory(index: number) {
  categoriesRepo.deleteCategory(index)
  return
}
  
export default {
  getAll,
  getSingle,
  createCategory,
  updateCategory,
  deleteCategory
};
