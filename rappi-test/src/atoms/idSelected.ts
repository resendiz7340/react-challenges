import { atom } from "recoil";

export const idSelectedState = atom<number>({
  key: "idSelectedState",
  default: 0,
});
