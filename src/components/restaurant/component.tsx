import { FC } from "react";
import { Restaurant as RestaurantType } from "../../types";
import { Menu } from "../menu/component";
import { Reviews } from "../reviews/component";

type RestaurantCardProps = {
  restaurant: RestaurantType;
};

export const Restaurant: FC<RestaurantCardProps> = ({
  restaurant: { name, menu, reviews },
}) => (
  <div>
    <h2>{name}</h2>
    <Menu menu={menu} />
    <Reviews reviews={reviews} />
  </div>
);
