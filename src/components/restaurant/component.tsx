import { FC } from "react";
import { Menu } from "../menu/component";
import { Reviews } from "../reviews/component";
import { CreateReviewForm } from "../create-review-form/component";
import { useUser } from "../../hooks/use-user";
import { RestaurantNormalized } from "../../types";

type RestaurantProps = {
  restaurant: RestaurantNormalized;
};

export const Restaurant: FC<RestaurantProps> = ({ restaurant }) => {
  const { user } = useUser();

  const { name, menu, reviews } = restaurant;

  return (
    <div>
      <h2>{name}</h2>
      {menu && <Menu dishIds={menu} />}
      {reviews && <Reviews reviewIds={reviews} />}
      {user && <CreateReviewForm />}
    </div>
  );
};
