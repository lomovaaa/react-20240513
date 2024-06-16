import { FC } from "react";
import { Restaurant } from "./component";
import { useGetRestaurantsQuery } from "../../redux/service/api";
import { selectRestaurantFromResult } from "../../redux/service/api/selectors";
import { Outlet, useParams } from "react-router-dom";

export const RestaurantContainer: FC = () => {
  const { restaurantId } = useParams();

  const { data: restaurant } = useGetRestaurantsQuery(undefined, {
    skip: !restaurantId,
    selectFromResult: selectRestaurantFromResult(restaurantId || ""),
  });

  if (!restaurant) {
    return null;
  }

  return (
    <div>
      <Restaurant restaurant={restaurant} />
      <Outlet />
    </div>
  );
};
