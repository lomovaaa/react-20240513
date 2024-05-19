import { FC } from "react";
import { RestaurantReviewItem } from "../../types";

export const ReviewsItem: FC<RestaurantReviewItem> = ({ text }) => (
  <p>{text}</p>
);
