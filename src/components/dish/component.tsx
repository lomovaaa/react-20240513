import { FC } from "react";
import { RestaurantDish } from "../../types";
import { Counter } from "../counter/component";

export const Dish: FC<RestaurantDish> = ({ name }) => (
  <div>
    <p>{name}</p>
    <Counter />
  </div>
);
