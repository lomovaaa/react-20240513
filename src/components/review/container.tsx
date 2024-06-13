import { FC } from "react";
import { useSelector } from "react-redux";
import { Store } from "../../types";
import { selectReviewById } from "../../redux/entities/review/selectors";
import { Review } from "./component";

type ReviewContainerProps = {
  id: string;
};

export const ReviewContainer: FC<ReviewContainerProps> = ({ id }) => {
  const review = useSelector((state: Store) => selectReviewById(state, id));

  if (!review) {
    return null;
  }

  return <Review review={review} />;
};
