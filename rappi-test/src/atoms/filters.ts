import { atom } from "recoil";

interface IFiltersState {
  offersOnly: boolean;
  sortBy: "price-dsc" | "price-asc" | "quantity-dsc" | "quantity-asc" | "none";
}

export const filtersState = atom<IFiltersState>({
  key: "filtersState",
  default: {
    offersOnly: false,
    sortBy: "none",
  },
});
