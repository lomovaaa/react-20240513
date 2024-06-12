import { FC, useState } from "react";
import { RestaurantTabsContainer } from "../restaurant-tabs/container";
import { RestaurantContainer } from "../restaurant/container";
import { RestaurantNormalized } from "../../types";

type RestaurantsProps = {
  restaurants: {
    [key: string]: RestaurantNormalized;
  };
};

export const Restaurants: FC<RestaurantsProps> = ({ restaurants }) => {
  const [activeRestaurantId, setActiveRestaurantId] = useState(
    () => Object.values(restaurants)[0].id
  );

  return (
    <div>
      {/* <ProgressBar /> */}
      <RestaurantTabsContainer onClick={setActiveRestaurantId} />
      <RestaurantContainer restaurantId={activeRestaurantId} />
    </div>
  );
};
