import { createSlice } from "@reduxjs/toolkit";
import { normalizedDishes } from "../../../../materials/normalized-mock";
import { RestaurantDish } from "../../../types";

export const DishSlice = createSlice({
  name: "dish",
  initialState: {
    entities: normalizedDishes.reduce<Record<string, RestaurantDish>>(
      (acc, dish) => {
        acc[dish.id] = dish;

        return acc;
      },
      {}
    ),
    ids: normalizedDishes.map(({ id }) => id),
  },
  reducers: {},
});
