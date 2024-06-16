import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_ENDPOINT } from "../../../constants/endpoint";
import {
  CreateReviewRequest,
  RestaurantReviewNormalized,
} from "../../../types";

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
          .map(({ id }: RestaurantReviewNormalized) => ({ type: "Review", id }))
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
    updateReview: builder.mutation({
      query: (review: RestaurantReviewNormalized) => ({
        url: `review/${review.id}`,
        method: "PATCH",
        body: review,
      }),
      invalidatesTags: (_, __, review) => [{ type: "Review", id: review.id }],
    }),
  }),
});

export const {
  useGetRestaurantsQuery,
  useGetDishesByRestaurantIdQuery,
  useGetReviewsByRestaurantIdQuery,
  useCreateReviewMutation,
  useUpdateReviewMutation,
} = apiService;
