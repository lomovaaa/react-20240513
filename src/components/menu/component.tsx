import { FC } from "react";
import { DishContainer } from "../dish/container";

type MenuProps = {
  dishIds: Array<string>;
};

export const Menu: FC<MenuProps> = ({ dishIds }) => {
  return (
    <div>
      <h3>Меню</h3>
      <ul>
        {dishIds.map((dishId) => (
          <li key={dishId}>
            <DishContainer id={dishId} />
          </li>
        ))}
      </ul>
    </div>
  );
};
