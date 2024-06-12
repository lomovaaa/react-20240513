import { FC } from "react";
import { useCount } from "../../hooks/use-count";
import { Button } from "../button/component";
import { useUser } from "../../hooks/use-user";
import { RestaurantDish } from "../../types";

type DishProps = {
  dish: RestaurantDish;
};

export const Dish: FC<DishProps> = ({ dish }) => {
  const { counter, increment, decrement } = useCount();
  const { user } = useUser();

  const { name } = dish;

  return (
    <div>
      <p>{name}</p>
      <div>
        <p>{counter}</p>
        {user && (
          <>
            <Button type="button" onClick={increment}>
              +
            </Button>
            <Button type="button" onClick={decrement}>
              -
            </Button>
          </>
        )}
      </div>
      <p>{dish.price}</p>
    </div>
  );
};
