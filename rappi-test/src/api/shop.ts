import { ICategory } from "../atoms/categories";
import { IProduct } from "../atoms/products";
import _categories from "./categories.json";
import _products from "./products.json";

const getCategories = () => {
  return new Promise<ICategory[]>((resolve, reject) => {
    setTimeout(
      resolve(_categories.categories) as unknown as TimerHandler,
      Math.random() * 1000
    );
  });
};

const getProducts = () => {
  return new Promise<IProduct[]>((resolve, reject) => {
    setTimeout(
      resolve(_products.products) as unknown as TimerHandler,
      Math.random() * 1000
    );
  });
};

const buyProducts = () => {
  return new Promise<void>((resolve, reject) => {
    setTimeout(resolve() as unknown as TimerHandler, Math.random() * 3000);
  });
};

export { getCategories, getProducts, buyProducts };
