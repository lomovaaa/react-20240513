import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { RestaurantSlice } from "./entities/restaurant";
import { UserSlice } from "./entities/user";
import { DishSlice } from "./entities/dish";
import { ReviewSlice } from "./entities/review";

export const store = configureStore({
  reducer: combineSlices(RestaurantSlice, DishSlice, ReviewSlice, UserSlice),
});
