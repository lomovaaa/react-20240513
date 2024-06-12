import { FC } from "react";
import { ReviewContainer } from "../review/container";

type ReviewsProps = {
  reviewIds: Array<string>;
};

export const Reviews: FC<ReviewsProps> = ({ reviewIds }) => (
  <div>
    <h3>Отзывы</h3>
    <ul>
      {reviewIds.map((id) => (
        <li key={id}>
          <ReviewContainer id={id} />
        </li>
      ))}
    </ul>
  </div>
);
