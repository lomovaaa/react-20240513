import { FC } from "react";
import { Restaurants } from "./component";
import { useGetRestaurantsQuery } from "../../redux/service/api";

export const RestaurantsContainer: FC = () => {
  const { data: restaurants, isLoading } = useGetRestaurantsQuery(undefined);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!restaurants) {
    return null;
  }

  return <Restaurants restaurants={restaurants} />;
};
