import { FC } from "react";
import { Reviews } from "./component";
import { useGetReviewsByRestaurantIdQuery } from "../../redux/service/api";
import { useParams } from "react-router-dom";

export const ReviewsContainer: FC = () => {
  const { restaurantId } = useParams();

  const { data: reviews, isFetching } = useGetReviewsByRestaurantIdQuery(
    restaurantId || ""
  );

  if (isFetching) {
    return <div>Loading...</div>;
  }

  if (!reviews) {
    return null;
  }

  return <Reviews reviews={reviews} />;
};
