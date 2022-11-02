import { atom, selector } from "recoil";
import { filtersState } from "./filters";
import { idSelectedState } from "./idSelected";

export interface IProduct {
  quantity: number;
  price: string;
  available: boolean;
  sublevel_id: number;
  name: string;
  id: string;
}

export const productsState = atom<IProduct[]>({
  key: "productsState",
  default: [],
});

export const productsFilteredState = selector({
  key: "productsFiltered",
  get: ({ get }) => {
    const products = get(productsState);
    const idSelected = get(idSelectedState);
    const filters = get(filtersState);

    const filtered = idSelected
      ? products.filter((product) => product.sublevel_id === idSelected)
      : [...products];

    const offers = filters.offersOnly
      ? filtered.filter((product) => product.available)
      : [...filtered];

    switch (filters.sortBy) {
      case "price-asc":
        offers.sort((a, b) => {
          const priceA = Number(a.price.split("$")[1].replaceAll(",", ""));
          const priceB = Number(b.price.split("$")[1].replaceAll(",", ""));

          return priceA < priceB ? -1 : 1;
        });
        break;
      case "price-dsc":
        offers.sort((a, b) => {
          const priceA = Number(a.price.split("$")[1].replaceAll(",", ""));
          const priceB = Number(b.price.split("$")[1].replaceAll(",", ""));

          return priceA < priceB ? 1 : -1;
        });
        break;
      case "quantity-asc":
        offers.sort((a, b) => (a.quantity < b.quantity ? -1 : 1));
        break;
      case "quantity-dsc":
        offers.sort((a, b) => (a.quantity < b.quantity ? 1 : -1));
        break;
      default:
    }

    return offers;
  },
});
