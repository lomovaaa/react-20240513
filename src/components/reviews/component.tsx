import { FC } from "react";
import { RestaurantReview } from "../../types";
import { Review } from "../review/component";

type ReviewsProps = {
  reviews: Array<RestaurantReview>;
};

export const Reviews: FC<ReviewsProps> = ({ reviews }) => (
  <div>
    <h3>Отзывы</h3>
    <ul>
      {reviews.map((review) => (
        <li key={review.id}>
          <Review {...review} />
        </li>
      ))}
    </ul>
  </div>
);
