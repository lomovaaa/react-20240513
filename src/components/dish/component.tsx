import { FC } from "react";
import { RestaurantDish } from "../../types";
import { useCount } from "../../hooks/use-count";
import { Button } from "../button/component";

export const Dish: FC<RestaurantDish> = ({ name }) => {
  const { counter, increment, decrement } = useCount();

  return (
    <div>
      <p>{name}</p>
      <div>
        <p>{counter}</p>
        <Button type="button" onClick={increment}>
          +
        </Button>
        <Button type="button" onClick={decrement}>
          -
        </Button>
      </div>
    </div>
  );
};
