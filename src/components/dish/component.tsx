import { FC } from "react";
import { RestaurantDish } from "../../types";
import { useCount } from "../../hooks/use-count";

export const Dish: FC<RestaurantDish> = ({ name }) => {
  const { counter, increment, decrement } = useCount();

  return (
    <div>
      <p>{name}</p>
      <div>
        <p>{counter}</p>
        <button type="button" onClick={increment}>
          +
        </button>
        <button type="button" onClick={decrement}>
          -
        </button>
      </div>
    </div>
  );
};
