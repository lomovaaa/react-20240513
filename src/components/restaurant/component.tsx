import { FC } from "react";
import { CreateReviewForm } from "../create-review-form/component";
import { useUser } from "../../hooks/use-user";
import { RestaurantNormalized } from "../../types";
import { MenuContainer } from "../menu/container";
import { ReviewsContainer } from "../reviews/container";

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
      {user && <CreateReviewForm />}
    </div>
  );
};
