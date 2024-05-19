import { FC } from "react";
import { RestaurantMenuItem } from "../../types";

export const MenuItem: FC<RestaurantMenuItem> = ({ name }) => <p>{name}</p>;
