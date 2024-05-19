import { FC } from "react";
import { RestaurantMenuItem } from "../../types";
import { MenuItem } from "../menu-item/component";

type MenuProps = {
  menu: Array<RestaurantMenuItem>;
};

export const Menu: FC<MenuProps> = ({ menu }) => (
  <div>
    <h3>Меню</h3>
    <ul>
      {menu.map((item) => (
        <li key={item.id}>
          <MenuItem {...item} />
        </li>
      ))}
    </ul>
  </div>
);
