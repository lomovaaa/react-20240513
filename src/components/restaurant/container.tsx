import { FC } from "react";
import { Restaurant } from "./component";
import { useGetRestaurantsQuery } from "../../redux/service/api";
import { selectRestaurantFromResult } from "../../redux/service/api/selectors";

type RestaurantContainerProps = {
  id: string;
};

export const RestaurantContainer: FC<RestaurantContainerProps> = ({ id }) => {
  const { data: restaurant } = useGetRestaurantsQuery(undefined, {
    skip: !id,
    selectFromResult: selectRestaurantFromResult(id),
  });

  if (!restaurant) {
    return null;
  }

  return <Restaurant restaurant={restaurant} />;
};
