import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestaurantDishIds } from "../../restaurant/selectors";
import { Store } from "../../../../types";
import { selectReviewIds } from "../selectors";

export const getReviewsByRestaurantId = createAsyncThunk(
  "review/getReviewsByRestaurantId",
  async (restaurantId: string) => {
    const response = await fetch(
      `http://localhost:3001/api/reviews?restaurantId=${restaurantId}`
    );

    return response.json();
  },
  {
    condition: (restaurantId, { getState }) => {
      const state = getState() as Store;
      const loadedReviewIds = selectReviewIds(state);
      const restaurantReviewIds = selectRestaurantDishIds(
        state,
        restaurantId
      );

      return restaurantReviewIds?.some((id) => !loadedReviewIds.includes(id));
    },
  }
);
