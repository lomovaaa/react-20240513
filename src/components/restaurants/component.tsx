import { FC, useEffect, useState } from "react";
import { RestaurantContainer } from "../restaurant/container";
import { Nullable, RestaurantNormalized } from "../../types";
import { RestaurantTabs } from "../restaurant-tabs/component";

type RestaurantsProps = {
  restaurants: Array<RestaurantNormalized>;
};

export const Restaurants: FC<RestaurantsProps> = ({ restaurants }) => {
  const [activeRestaurantId, setActiveRestaurantId] =
    useState<Nullable<string>>(null);

  useEffect(() => {
    if (!activeRestaurantId && restaurants.length) {
      setActiveRestaurantId(restaurants[0].id);
    }
  }, [activeRestaurantId, restaurants]);

  return (
    <div>
      {/* <ProgressBar /> */}
      <RestaurantTabs restaurants={restaurants} onClick={setActiveRestaurantId} />
      {activeRestaurantId && <RestaurantContainer id={activeRestaurantId} />}
    </div>
  );
};
