import { FC } from "react";
import { Outlet } from "react-router-dom";
import { RestaurantTabsContainer } from "../components/restaurant-tabs/container";

export const RestaurantsPage: FC = () => (
  <div>
    <RestaurantTabsContainer />
    <Outlet />
  </div>
);
