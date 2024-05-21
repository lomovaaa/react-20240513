import { FC } from "react";
import { RestaurantDish } from "../../types";
import { Dish } from "../dish/component";

type MenuProps = {
  menu: Array<RestaurantDish>;
};

export const Menu: FC<MenuProps> = ({ menu }) => (
  <div>
    <h3>Меню</h3>
    <ul>
      {menu.map((dish) => (
        <li key={dish.id}>
          <Dish {...dish} />
        </li>
      ))}
    </ul>
  </div>
);
