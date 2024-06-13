import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurants } from "../../redux/entities/restaurant/selectors";
import { Restaurants } from "./component";
import { getRestaurants } from "../../redux/entities/restaurant/thunks/get-restaurants";
import { StoreDispatch } from "../../redux";

export const RestaurantsContainer: FC = () => {
  const restaurants = useSelector(selectRestaurants);

  const dispatch = useDispatch<StoreDispatch>();

  useEffect(() => {
    dispatch(getRestaurants());
  }, []);

  if (!restaurants) {
    return null;
  }

  return <Restaurants restaurants={restaurants} />;
};
