import { FC } from "react";
import { RestaurantDish } from "../../types";
import { Link } from "react-router-dom";

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
            <Link to={`/dish/${dish.id}`}>{dish.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
