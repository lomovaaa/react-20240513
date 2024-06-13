import { FC } from "react";
import { useSelector } from "react-redux";
import { RestaurantTabs } from "./component";
import { selectRestaurantIds } from "../../redux/entities/restaurant/selectors";

type RestaurantTabsContainerProps = {
  onClick?: (id: string) => void;
};

export const RestaurantTabsContainer: FC<RestaurantTabsContainerProps> = ({
  onClick,
}) => {
  const restaurantIds = useSelector(selectRestaurantIds);

  return <RestaurantTabs restaurantIds={restaurantIds} onClick={onClick} />;
};
