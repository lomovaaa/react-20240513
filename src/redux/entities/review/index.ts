import { createSlice } from "@reduxjs/toolkit";
import { normalizedReviews } from "../../../../materials/normalized-mock";
import { RestaurantReviewNormalized } from "../../../types";

export const ReviewSlice = createSlice({
  name: "review",
  initialState: {
    entities: normalizedReviews.reduce<Record<string, RestaurantReviewNormalized>>(
      (acc, review) => {
        acc[review.id] = review;

        return acc;
      },
      {}
    ),
    ids: normalizedReviews.map(({ id }) => id),
  },
  reducers: {},
});
