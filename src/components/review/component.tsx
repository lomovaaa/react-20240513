import { FC } from "react";
import { RestaurantReview } from "../../types";

export const Review: FC<RestaurantReview> = ({ text }) => (
  <p>{text}</p>
);
