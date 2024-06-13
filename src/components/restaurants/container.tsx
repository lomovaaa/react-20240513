import { FC } from "react";
import { useSelector } from "react-redux";
import { selectRestaurants } from "../../redux/entities/restaurant/selectors";
import { Restaurants } from "./component";

export const RestaurantsContainer: FC = () => {
  const restaurants = useSelector(selectRestaurants);

  return <Restaurants restaurants={restaurants} />;
};
