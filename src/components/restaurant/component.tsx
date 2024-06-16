import { FC } from "react";
import { useUser } from "../../hooks/use-user";
import { RestaurantNormalized } from "../../types";
import { MenuContainer } from "../menu/container";
import { ReviewsContainer } from "../reviews/container";
import { CreateReviewFormContainer } from "../create-review-form/container";

type RestaurantProps = {
  restaurant: RestaurantNormalized;
};

export const Restaurant: FC<RestaurantProps> = ({ restaurant }) => {
  const { user } = useUser();

  const { name, menu, reviews, id } = restaurant;

  return (
    <div>
      <h2>{name}</h2>
      {menu && <MenuContainer restaurantId={id} />}
      {reviews && <ReviewsContainer restaurantId={id} />}
      {user && <CreateReviewFormContainer restaurantId={id} />}
    </div>
  );
};
