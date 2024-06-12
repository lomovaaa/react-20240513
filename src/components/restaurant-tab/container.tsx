import { FC } from "react";
import { useSelector } from "react-redux";
import { Store } from "../../types";
import { RestaurantTab } from "./component";
import { selectRestaurantById } from "../../redux/entities/restaurant/selectors";

type RestaurantTabProps = {
  id: string;
  onClick?: (id: string) => void;
};

export const RestaurantTabContainer: FC<RestaurantTabProps> = ({
  id,
  onClick,
}) => {
  const restaurant = useSelector((state: Store) =>
    selectRestaurantById(state, id)
  );

  return (
    <RestaurantTab onClick={() => onClick?.(id)} title={restaurant.name} />
  );
};
