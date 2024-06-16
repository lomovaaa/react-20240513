import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_ENDPOINT } from "../../../constants/endpoint";
import { CreateReviewRequest } from "../../../types";

export const apiService = createApi({
  reducerPath: "api",
  tagTypes: ["Review", "Restaurant"],
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
      providesTags: (result, _, restaurantId) =>
        result
          .map(({ id }) => ({ type: "Review", id }))
          .concat(
            { type: "Review", id: "All" },
            { type: "Restaurant", id: restaurantId }
          ),
    }),
    createReview: builder.mutation({
      query: ({
        restaurantId,
        newReview,
      }: {
        restaurantId: string;
        newReview: CreateReviewRequest;
      }) => ({
        url: `review/${restaurantId}`,
        method: "POST",
        body: newReview,
      }),
      invalidatesTags: (_, __, { restaurantId }) => [
        { type: "Restaurant", id: restaurantId },
      ],
    }),
  }),
});

export const {
  useGetRestaurantsQuery,
  useGetDishesByRestaurantIdQuery,
  useGetReviewsByRestaurantIdQuery,
  useCreateReviewMutation,
} = apiService;
