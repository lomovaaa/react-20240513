import { Store } from "../../../types";

export const selectDishById = (state: Store, id: string) =>
  state.dish.entities[id];

export const selectDishIds = (state: Store) => state.dish.ids;
