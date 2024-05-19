import { FC } from "react";
import { RestaurantReviewItem } from "../../types";
import { ReviewsItem } from "../reviews-item/component";

type ReviewsProps = {
  reviews: Array<RestaurantReviewItem>;
};

export const Reviews: FC<ReviewsProps> = ({ reviews }) => (
  <div>
    <h3>Отзывы</h3>
    <ul>
      {reviews.map((review) => (
        <li key={review.id}>
          <ReviewsItem {...review} />
        </li>
      ))}
    </ul>
  </div>
);
