import { FC } from "react";
import { RestaurantReview } from "../../types";

export const Review: FC<RestaurantReview> = ({ text }) => {
  if (text || Boolean(text?.length)) {
    return <p>{text}</p>;
  }

  return "-";
};
