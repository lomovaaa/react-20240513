import { FC } from "react";
import { Restaurant as RestaurantType } from "../../types";
import { Menu } from "../menu/component";
import { Reviews } from "../reviews/component";
import { CreateReviewForm } from "../create-review-form/component";

type RestaurantCardProps = {
  restaurant: RestaurantType;
};

export const Restaurant: FC<RestaurantCardProps> = ({
  restaurant: { name, menu, reviews },
}) => (
  <div>
    <h2>{name}</h2>
    {menu && <Menu menu={menu} />}
    {reviews && <Reviews reviews={reviews} />}
    <CreateReviewForm />
  </div>
);
