import { Store } from "../../../types";

export const selectCartModule = (state: Store) => state.cart;

export const selectDishCount = (state: Store, id: string) =>
  selectCartModule(state)[id] || 0;

export const selectCartCount = (state: Store) =>
  (Object.values(selectCartModule(state)) as Array<number>).reduce<number>(
    (sum: number, count: number) => sum + count,
    0
  );
