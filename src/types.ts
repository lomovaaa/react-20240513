export type RestaurantMenuItem = {
  id: string;
  name: string;
  price: number;
  ingredients: Array<string>;
};

export type RestaurantReviewItem = {
  id: string;
  user: string;
  text: string;
  rating: number;
};

export type Restaurant = {
  id: string;
  name: string;
  menu: Array<RestaurantMenuItem>;
  reviews: Array<RestaurantReviewItem>;
};
