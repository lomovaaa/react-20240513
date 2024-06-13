import { FC } from "react";
import { RestaurantTabContainer } from "../restaurant-tab/container";

type RestaurantTabsProps = {
  restaurantIds: Array<string>;
  onClick?: (id: string) => void;
};

export const RestaurantTabs: FC<RestaurantTabsProps> = ({ restaurantIds, onClick }) => {
  return (
    <div>
      {restaurantIds.map((id) => (
        <RestaurantTabContainer key={id} id={id} onClick={onClick} />
      ))}
    </div>
  );
};
