import { atom, selector } from "recoil";
import { loadState } from "../utils/localStorage";
import { IProduct } from "./products";

export interface ICartProduct extends IProduct {
  items: number;
}

interface ICartState {
  products: ICartProduct[];
}

const initialState = loadState("cartState") ?? {
  products: [],
};

export const cartState = atom<ICartState>({
  key: "cartState",
  default: initialState,
});

export const cartStatsState = selector({
  key: "cartStatsState",
  get: ({ get }) => {
    const cart = get(cartState);

    const totalItems = cart.products
      .map((p) => p.items)
      .reduce((prev, curr) => prev + curr, 0);
    const totalPrice = cart.products
      .map((p) => Number(p.price.split("$")[1].replaceAll(",", "")))
      .reduce((prev, curr) => prev + curr, 0);

    return { totalItems, totalPrice };
  },
});
