import { FC, useState } from "react";
import { Restaurant as RestaurantType } from "../../types";
import { Restaurant } from "../restaurant/component";
import { Tabs } from "../tabs/component";

type RestaurantsProps = {
  restaurants: Array<RestaurantType>;
};

export const Restaurants: FC<RestaurantsProps> = ({ restaurants }) => {
  const [activeRestaurantId, setActiveRestaurantId] = useState(
    restaurants[0].id
  );

  const currentRestaurant = restaurants.find(
    ({ id }) => id === activeRestaurantId
  );

  return (
    <div>
      {/* <ProgressBar /> */}
      <Tabs restaurants={restaurants} onChange={setActiveRestaurantId} />
      {currentRestaurant && <Restaurant restaurant={currentRestaurant} />}
    </div>
  );
};
