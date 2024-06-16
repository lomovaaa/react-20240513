import { FC, useState } from "react";
import { RestaurantReviewNormalized } from "../../types";
import { Button } from "../button/component";
import { UpdateReviewFormContainer } from "../update-review-form/container";
import { useUser } from "../../hooks/use-user";

type ReviewProps = {
  review: RestaurantReviewNormalized;
};

export const Review: FC<ReviewProps> = ({ review }) => {
  const { user } = useUser();
  const [isEdit, setIsEdit] = useState(false);

  const { text } = review;

  return (
    <div>
      {!isEdit && <p>{text}</p>}

      {!isEdit && user && (
        <Button type="button" onClick={() => setIsEdit(true)}>
          Редактировать
        </Button>
      )}

      {isEdit && (
        <UpdateReviewFormContainer
          review={review}
          onCancel={() => setIsEdit(false)}
        />
      )}
    </div>
  );
};
