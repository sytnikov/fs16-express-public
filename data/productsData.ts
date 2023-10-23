import { Product } from "../types/Product";

export const productsData: Product[] = [
  {
    id: 1,
    name: "Book 1",
    price: 122,
    description: "some text",
    category: {
      id: 1,
      name: "Fiction",
      images: ["https://placeimg.com/640/480/any?r=0.9178516507833767"],
    },
  },
  {
    id: 2,
    name: "Book 2",
    price: 333,
    description: "some text",
    category: {
      id: 2,
      name: "Novel",
      images: ["https://placeimg.com/640/480/any?r=0.9178516507833767"],
    },
  },
  {
    id: 3,
    name: "Book 3",
    description: "some text",
    price: 432,
    category: {
      id: 3,
      name: "Romance",
      images: ["https://placeimg.com/640/480/any?r=0.9178516507833767"],
    },
  },
];
