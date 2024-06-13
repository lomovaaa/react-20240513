import { FC } from "react";
import { RestaurantDish } from "../../types";
import { useCount } from "../../hooks/use-count";
import { Button } from "../button/component";
import { useUser } from "../../hooks/use-user";

export const Dish: FC<RestaurantDish> = ({ name }) => {
  const { counter, increment, decrement } = useCount();
  const { user } = useUser();

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
    </div>
  );
};
