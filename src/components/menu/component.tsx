import { FC } from "react";
import { DishContainer } from "../dish/container";
import { RestaurantDish } from "../../types";

type MenuProps = {
  dishes: Array<RestaurantDish>;
};

export const Menu: FC<MenuProps> = ({ dishes }) => {
  return (
    <div>
      <h3>Меню</h3>
      <ul>
        {dishes.map((dish) => (
          <li key={dish.id}>
            <DishContainer dish={dish} />
          </li>
        ))}
      </ul>
    </div>
  );
};
