import { FC } from "react";
import { RestaurantReviewNormalized } from "../../types";
import { Review } from "../review/component";

type ReviewsProps = {
  reviews: Array<RestaurantReviewNormalized>;
};

export const Reviews: FC<ReviewsProps> = ({ reviews }) => (
  <div>
    <h3>Отзывы</h3>
    <ul>
      {reviews.map((review) => (
        <li key={review.id}>
          <Review review={review} />
        </li>
      ))}
    </ul>
  </div>
);
