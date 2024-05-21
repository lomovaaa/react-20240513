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
