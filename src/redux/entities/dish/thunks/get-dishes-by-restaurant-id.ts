import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectDishIds } from "../selectors";
import { selectRestaurantDishIds } from "../../restaurant/selectors";
import { Store } from "../../../../types";

export const getDishesByRestaurantId = createAsyncThunk(
  "dish/getDishesByRestaurantId",
  async (restaurantId: string) => {
    const response = await fetch(
      `http://localhost:3001/api/dishes?restaurantId=${restaurantId}`
    );

    return response.json();
  },
  {
    condition: (restaurantId, { getState }) => {
      const state = getState() as Store;
      const loadedDishIds = selectDishIds(state);
      const restaurantDishIds = selectRestaurantDishIds(
        state,
        restaurantId
      );

      return restaurantDishIds?.some((id) => !loadedDishIds.includes(id));
    },
  }
);
