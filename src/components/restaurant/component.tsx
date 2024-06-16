import { FC } from "react";
import { RestaurantNormalized } from "../../types";
import { RestaurantNavigationTabs } from "../restaurant-navigation-tabs/component";

type RestaurantProps = {
  restaurant: RestaurantNormalized;
};

export const Restaurant: FC<RestaurantProps> = ({ restaurant }) => {
  const { name, description } = restaurant;

  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
      <RestaurantNavigationTabs />
    </div>
  );
};
