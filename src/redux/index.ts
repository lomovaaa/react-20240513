import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { RestaurantSlice } from "./entities/restaurant";
import { UserSlice } from "./entities/user";
import { DishSlice } from "./entities/dish";
import { ReviewSlice } from "./entities/review";
import { CartSlice } from "./ui/cart";
import { apiService } from "./service/api";

export const store = configureStore({
  reducer: combineSlices(
    RestaurantSlice,
    DishSlice,
    ReviewSlice,
    UserSlice,
    CartSlice,
    apiService,
  ),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiService.middleware),
});

export type StoreDispatch = typeof store.dispatch;
