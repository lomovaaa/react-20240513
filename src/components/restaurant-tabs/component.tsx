import { FC } from "react";
import { RestaurantTab } from "../restaurant-tab/component";
import { RestaurantNormalized } from "../../types";

type RestaurantTabsProps = {
  restaurants: Array<RestaurantNormalized>;
  onClick?: (id: string) => void;
};

export const RestaurantTabs: FC<RestaurantTabsProps> = ({
  restaurants,
  onClick,
}) => {
  return (
    <div>
      {restaurants.map((restaurant) => (
        <RestaurantTab
          key={restaurant.id}
          title={restaurant.name}
          onClick={() => onClick?.(restaurant.id)}
        />
      ))}
    </div>
  );
};
