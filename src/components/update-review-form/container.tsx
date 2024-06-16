import { FC, useCallback, useMemo } from "react";
import { useUpdateReviewMutation } from "../../redux/service/api";
import { ReviewForm, ReviewFormValues } from "../review-form/component";
import { RestaurantReviewNormalized } from "../../types";

type UpdateReviewFormContainerProps = {
  review: RestaurantReviewNormalized;
  onCancel?: () => void;
};

export const UpdateReviewFormContainer: FC<UpdateReviewFormContainerProps> = ({
  review,
  onCancel,
}) => {
  const [updateReview, { isLoading }] = useUpdateReviewMutation();

  const { text, rating } = review;

  const handleSave = useCallback(
    (form: ReviewFormValues) => {
      updateReview({
        ...review,
        ...form,
      });
    },
    [updateReview, review]
  );

  const formValue = useMemo(
    () => ({
      text,
      rating,
    }),
    [text, rating]
  );

  return (
    <ReviewForm
      onSave={handleSave}
      onCancel={onCancel}
      initialValue={formValue}
      isLoading={isLoading}
    />
  );
};
