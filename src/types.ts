import { EntityState } from "@reduxjs/toolkit";

export type RestaurantDish = {
  id: string;
  name: string;
  price?: number;
  ingredients: Array<string>;
};

export type RestaurantReview = {
  id: string;
  user: string;
  text: string;
  rating: string;
};

export type Restaurant = {
  id: string;
  name: string;
  menu?: Array<RestaurantDish>;
  reviews?: Array<RestaurantReview>;
};

export type RestaurantNormalized = {
  id: string;
  name: string;
  menu?: Array<string>;
  reviews?: Array<string>;
};

export type RestaurantReviewNormalized = {
  id: string;
  userId: string;
  text: string;
  rating: string;
};

export type UserNormalized = {
  id: string;
  name: string;
};

export type Store = {
  restaurant: EntityState<RestaurantNormalized, string>;
  dish: EntityState<RestaurantDish, string>;
  review: EntityState<RestaurantReviewNormalized, string>;
  user: EntityState<UserNormalized, string>;
  cart: Record<string, number>;
};

export type Nullable<T> = T | null;

export type CreateReviewRequest = {
  text: string;
  rating: string;
  userId: string;
};
