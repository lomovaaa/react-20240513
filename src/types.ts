export type RestaurantDish = {
  id: string;
  name: string;
  price?: number;
  ingredients: Array<string>;
};

export type RestaurantReview = {
  id: string;
  user: string;
  text?: string;
  rating: number;
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
  text?: string;
  rating: number;
};

export type UserNormalized = {
  id: string;
  name: string;
};

type StoreSlice<T> = {
  entities: {
    [key: string]: T;
  };
  ids: Array<string>;
};

export type Store = {
  restaurant: StoreSlice<RestaurantNormalized>;
  dish: StoreSlice<RestaurantDish>;
  review: StoreSlice<RestaurantReviewNormalized>;
  user: StoreSlice<UserNormalized>;
};

export type Nullable<T> = T | null;
