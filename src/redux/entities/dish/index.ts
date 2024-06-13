import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getDishesByRestaurantId } from "./thunks/get-dishes-by-restaurant-id";

const entitiyAdapter = createEntityAdapter();

export const DishSlice = createSlice({
  name: "dish",
  initialState: entitiyAdapter.getInitialState(),
  reducers: {},
  extraReducers: (builder) =>
    builder.addCase(getDishesByRestaurantId.fulfilled, (state, { payload }) => {
      entitiyAdapter.setMany(state, payload);
    }),
});
