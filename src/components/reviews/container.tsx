import { FC } from "react";
import { Reviews } from "./component";
import { useGetReviewsByRestaurantIdQuery } from "../../redux/service/api";

type ReviewsContainerProps = {
  restaurantId: string;
};

export const ReviewsContainer: FC<ReviewsContainerProps> = ({
  restaurantId,
}) => {
  const { data: reviews, isFetching } =
    useGetReviewsByRestaurantIdQuery(restaurantId);

  if (isFetching) {
    return <div>Loading...</div>;
  }

  if (!reviews) {
    return null;
  }

  return <Reviews reviews={reviews} />;
};
