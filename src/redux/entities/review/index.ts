import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getReviewsByRestaurantId } from "./thunks/get-reviews-by-restaurant-id";

const entitiyAdapter = createEntityAdapter();

export const ReviewSlice = createSlice({
  name: "review",
  initialState: entitiyAdapter.getInitialState(),
  reducers: {},
  extraReducers: (builder) =>
    builder.addCase(getReviewsByRestaurantId.fulfilled, (state, { payload }) => {
      entitiyAdapter.setAll(state, payload);
    }),
});
