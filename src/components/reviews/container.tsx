import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReviewsByRestaurantId } from "../../redux/entities/review/thunks/get-reviews-by-restaurant-id";
import { StoreDispatch } from "../../redux";
import { Store } from "../../types";
import { selectRestaurantReviewIds } from "../../redux/entities/restaurant/selectors";
import { Reviews } from "./component";

type ReviewsContainerProps = {
  restaurantId: string;
};

export const ReviewsContainer: FC<ReviewsContainerProps> = ({
  restaurantId,
}) => {
  const dispatch = useDispatch<StoreDispatch>();

  const reviewIds = useSelector((state: Store) =>
    selectRestaurantReviewIds(state, restaurantId)
  );

  useEffect(() => {
    dispatch(getReviewsByRestaurantId(restaurantId));
  }, [restaurantId, dispatch]);

  if (!reviewIds) {
    return null;
  }

  return <Reviews reviewIds={reviewIds} />;
};
