import { FC } from "react";
import { Restaurant as RestaurantType } from "../../types";
import { Menu } from "../menu/component";
import { Reviews } from "../reviews/component";
import { CreateReviewForm } from "../create-review-form/component";
import { useUser } from "../../hooks/use-user";

type RestaurantCardProps = {
  restaurant: RestaurantType;
};

export const Restaurant: FC<RestaurantCardProps> = ({
  restaurant: { name, menu, reviews },
}) => {
  const { user } = useUser();

  return (
    <div>
      <h2>{name}</h2>
      {menu && <Menu menu={menu} />}
      {reviews && <Reviews reviews={reviews} />}
      {user && <CreateReviewForm />}
    </div>
  );
};
