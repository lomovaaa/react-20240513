import { Store } from "../../../types";

export const selectRestaurants = (state: Store) => state.restaurant.entities;

export const selectRestaurantById = (state: Store, id: string) =>
  state.restaurant.entities[id];

export const selectRestaurantIds = (state: Store) => state.restaurant.ids;

export const selectRestaurantDishIds = (state: Store, id: string) =>
  selectRestaurantById(state, id)?.menu;

export const selectRestaurantReviewIds = (state: Store, id: string) =>
  selectRestaurantById(state, id)?.reviews;
