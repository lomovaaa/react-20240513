import { FC } from "react";
import { useGetRestaurantsQuery } from "../../redux/service/api";
import { RestaurantTabs } from "./component";

export const RestaurantTabsContainer: FC = () => {
  const { data: restaurants, isLoading } = useGetRestaurantsQuery(undefined);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!restaurants) {
    return null;
  }

  return <RestaurantTabs restaurants={restaurants} />;
};
