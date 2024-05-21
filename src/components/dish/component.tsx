import { FC } from "react";
import { RestaurantDish } from "../../types";

export const Dish: FC<RestaurantDish> = ({ name }) => <p>{name}</p>;
