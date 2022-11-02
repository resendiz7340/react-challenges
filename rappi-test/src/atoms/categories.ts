import { atom } from "recoil";

export interface ICategory {
  id: number;
  name: string;
  sublevels?: ICategory[];
}

export const categoriesState = atom<ICategory[]>({
  key: "categoriesState",
  default: [],
});
