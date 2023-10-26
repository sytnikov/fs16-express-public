import { categoriesData } from "../data/categoriesData";
import { productsData } from "../data/productsData";
import { CreateProductInput } from "../types/CreateProductInput";
import { UpdateProductInput } from "../types/UpdateProductInput";

const createOne = (newProduct: CreateProductInput) => {
  const category = categoriesData.find((i) => i.id === newProduct.categoryId);
  if (category) {
    newProduct.id = productsData[productsData.length - 1].id + 1;
    delete newProduct.categoryId;
    newProduct.category = category;
    productsData.push(newProduct);
    return newProduct;
  }
  return false;
};

const findAll = () => {
  return productsData;
};

const removeOne = (id: number) => {
  const index = productsData.findIndex((i) => i.id === id);
  if (index !== -1) {
    productsData.splice(index, 1);
  }
  return index;
};

const updateOne = (updatedProduct: UpdateProductInput, id: number) => {
  const index = productsData.findIndex((i) => i.id === id);
  if (index !== -1) {
    productsData[index] = updatedProduct;
    updatedProduct.id = id;
    return updatedProduct;
  }
  return false;
};

export const findOne = (id: number) => {
  return productsData.find((i) => i.id === id);
};

export default { createOne, findAll, removeOne, findOne, updateOne };
