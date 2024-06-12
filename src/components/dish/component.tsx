import { FC } from "react";
import { useUser } from "../../hooks/use-user";
import { RestaurantDish } from "../../types";
import { Counter } from "../counter/component";

type DishProps = {
  dish: RestaurantDish;
  count: number;
  increment: () => void;
  decrement: () => void;
};

export const Dish: FC<DishProps> = ({ dish, count, increment, decrement }) => {
  const { user } = useUser();

  const { name } = dish;

  return (
    <div>
      <p>{name}</p>
      {user && (
        <Counter
          value={count}
          increment={increment}
          decrement={decrement}
        />
      )}
      <p>{dish.price}</p>
    </div>
  );
};
