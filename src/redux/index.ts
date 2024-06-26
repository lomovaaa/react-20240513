import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { RestaurantSlice } from "./entities/restaurant";
import { UserSlice } from "./entities/user";
import { DishSlice } from "./entities/dish";
import { ReviewSlice } from "./entities/review";
import { CartSlice } from "./ui/cart";

export const store = configureStore({
  reducer: combineSlices(
    RestaurantSlice,
    DishSlice,
    ReviewSlice,
    UserSlice,
    CartSlice
  ),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type StoreDispatch = typeof store.dispatch;
