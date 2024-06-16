import { FC, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RestaurantDish, Store } from "../../types";
import { Dish } from "./component";
import { add, remove } from "../../redux/ui/cart";
import { selectDishCount } from "../../redux/ui/cart/selectors";

type DishContainerProps = {
  dish: RestaurantDish;
};

export const DishContainer: FC<DishContainerProps> = ({ dish }) => {
  const { id } = dish;

  const count = useSelector((state: Store) => selectDishCount(state, id));

  const dispatch = useDispatch();

  const handleIncrement = useCallback(() => {
    dispatch(add(id));
  }, [dispatch, id]);

  const handleDecrement = useCallback(() => {
    dispatch(remove(id));
  }, [dispatch, id]);

  return (
    <Dish
      dish={dish}
      count={count}
      increment={handleIncrement}
      decrement={handleDecrement}
    />
  );
};
