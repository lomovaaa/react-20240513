import { FC } from "react";
import { Restaurant } from "../../types";
import { Menu } from "../menu/component";
import { Reviews } from "../reviews/component";

type RestaurantCardProps = {
  restaurant: Restaurant;
};

export const RestaurantCard: FC<RestaurantCardProps> = ({
  restaurant: { name, menu, reviews },
}) => (
  <div>
    <h2>{name}</h2>
    <Menu menu={menu} />
    <Reviews reviews={reviews} />
  </div>
);
