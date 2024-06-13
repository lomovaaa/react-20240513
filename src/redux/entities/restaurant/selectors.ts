import { Store } from "../../../types";

export const selectRestaurants = (state: Store) => state.restaurant.entities;

export const selectRestaurantById = (state: Store, id: string) =>
  state.restaurant.entities[id];

export const selectRestaurantIds = (state: Store) => state.restaurant.ids;
