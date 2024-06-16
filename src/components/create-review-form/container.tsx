import { FC, useCallback } from "react";
import { useCreateReviewMutation } from "../../redux/service/api";
import { ReviewForm, ReviewFormValues } from "../review-form/component";

type CreateReviewFormContainerProps = {
  restaurantId: string;
};

export const CreateReviewFormContainer: FC<CreateReviewFormContainerProps> = ({
  restaurantId,
}) => {
  const [createReview, { isLoading }] = useCreateReviewMutation();

  const handleSave = useCallback(
    (form: ReviewFormValues) => {
      createReview({
        restaurantId,
        newReview: { ...form, userId: "dfb982e9-b432-4b7d-aec6-7f6ff2e6af54" },
      });
    },
    [createReview, restaurantId]
  );

  return <ReviewForm onSave={handleSave} isLoading={isLoading} />;
};
