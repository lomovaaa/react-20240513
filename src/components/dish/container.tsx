import { FC, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Store } from "../../types";
import { Dish } from "./component";
import { add, remove } from "../../redux/ui/cart";
import { selectDishCount } from "../../redux/ui/cart/selectors";
import { useParams } from "react-router-dom";
import { useGetDishByIdQuery } from "../../redux/service/api";

export const DishContainer: FC = () => {
  const { dishId } = useParams();

  const { data: dish, isLoading } = useGetDishByIdQuery(dishId || "");

  const { id } = dish || {};

  const count = useSelector((state: Store) => selectDishCount(state, id));

  const dispatch = useDispatch();

  const handleIncrement = useCallback(() => {
    dispatch(add(id));
  }, [dispatch, id]);

  const handleDecrement = useCallback(() => {
    dispatch(remove(id));
  }, [dispatch, id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Dish
      dish={dish}
      count={count}
      increment={handleIncrement}
      decrement={handleDecrement}
    />
  );
};
