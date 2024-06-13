import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getRestaurants } from "./thunks/get-restaurants";

const entitiyAdapter = createEntityAdapter();

export const RestaurantSlice = createSlice({
  name: "restaurant",
  initialState: entitiyAdapter.getInitialState(),
  reducers: {},
  extraReducers: (builder) =>
    builder.addCase(getRestaurants.fulfilled, (state, { payload }) => {
      entitiyAdapter.setAll(state, payload)
    }),
});
