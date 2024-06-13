import { FC } from "react";
import { useSelector } from "react-redux";
import { Store } from "../../types";
import { selectRestaurantById } from "../../redux/entities/restaurant/selectors";
import { Restaurant } from "./component";

type RestaurantContainerProps = {
  restaurantId: string;
};

export const RestaurantContainer: FC<RestaurantContainerProps> = ({
  restaurantId,
}) => {
  const restaurant = useSelector((state: Store) =>
    selectRestaurantById(state, restaurantId)
  );

  return <Restaurant restaurant={restaurant} />;
};
