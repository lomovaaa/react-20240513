import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDishesByRestaurantId } from "../../redux/entities/dish/thunks/get-dishes-by-restaurant-id";
import { Menu } from "./component";
import { Store } from "../../types";
import { selectRestaurantDishIds } from "../../redux/entities/restaurant/selectors";
import { StoreDispatch } from "../../redux";

type MenuContainerProps = {
  restaurantId: string;
};

export const MenuContainer: FC<MenuContainerProps> = ({ restaurantId }) => {
  const dispatch = useDispatch<StoreDispatch>();

  const dishIds = useSelector((state: Store) =>
    selectRestaurantDishIds(state, restaurantId)
  );

  useEffect(() => {
    dispatch(getDishesByRestaurantId(restaurantId));
  }, [restaurantId, dispatch]);

  if (!dishIds) {
    return null;
  }

  return <Menu dishIds={dishIds} />;
};
