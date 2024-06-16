import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_ENDPOINT } from "../../../constants/endpoint";

export const apiService = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_ENDPOINT }),
  endpoints: (builder) => ({
    getRestaurants: builder.query({
      query: () => ({ url: "restaurants" }),
    }),
    getDishesByRestaurantId: builder.query({
      query: (restaurantId: string) => ({
        url: "dishes",
        params: { restaurantId },
      }),
    }),
    getReviewsByRestaurantId: builder.query({
      query: (restaurantId: string) => ({
        url: "reviews",
        params: { restaurantId },
      }),
    }),
  }),
});

export const {
  useGetRestaurantsQuery,
  useGetDishesByRestaurantIdQuery,
  useGetReviewsByRestaurantIdQuery,
} = apiService;
