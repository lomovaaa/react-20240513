import { FC } from "react";
import { RestaurantReviewNormalized } from "../../types";

type ReviewProps = {
  review: RestaurantReviewNormalized;
};

export const Review: FC<ReviewProps> = ({ review }) => {
  const { text } = review;

  if (text || Boolean(text?.length)) {
    return <p>{text}</p>;
  }

  return "-";
};
