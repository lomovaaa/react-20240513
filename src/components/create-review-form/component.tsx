import { FC, Reducer, useReducer } from "react";
import { ReviewRating } from "../review-rating/component";
import { Button } from "../button/component";
import { useCreateReviewMutation } from "../../redux/service/api";

type FormValues = {
  text: string;
  rating: string;
};

type Action = { type: string; payload: string };

const FORM_INITIAL_VALUES: FormValues = {
  text: "",
  rating: "",
};

const reducer: Reducer<FormValues, Action> = (
  state,
  { type, payload }
): FormValues => {
  switch (type) {
    case "setText":
      return { ...state, text: payload };
    case "setRating":
      return { ...state, rating: payload };
    case "reset":
      return FORM_INITIAL_VALUES;
    default:
      return state;
  }
};

type CreateReviewFormProps = {
  restaurantId: string;
};

export const CreateReviewForm: FC<CreateReviewFormProps> = ({
  restaurantId,
}) => {
  const [form, dispatch] = useReducer(reducer, FORM_INITIAL_VALUES);

  const [createReview, { isLoading }] = useCreateReviewMutation();

  const handleSubmit = () => {
    createReview({ restaurantId, newReview: { ...form, user: "dfb982e9-b432-4b7d-aec6-7f6ff2e6af54" } });
    dispatch({ type: "reset", payload: "" });
  };

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Текст
          <input
            value={form.text}
            onChange={(event) =>
              dispatch({ type: "setText", payload: event.target.value })
            }
          />
        </label>
      </div>
      <ReviewRating
        onChange={(value) => dispatch({ type: "setRating", payload: value })}
      />
      <Button>Сохранить</Button>
    </form>
  );
};
