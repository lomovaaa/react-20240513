import { FC, Reducer, useReducer } from "react";
import { ReviewRating } from "../review-rating/component";
import { Button } from "../button/component";

export type ReviewFormValues = {
  text: string;
  rating: string;
};

type Action = { type: string; payload: string };

const FORM_INITIAL_VALUES: ReviewFormValues = {
  text: "",
  rating: "",
};

const reducer: Reducer<ReviewFormValues, Action> = (
  state,
  { type, payload }
): ReviewFormValues => {
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

type ReviewFormProps = {
  initialValue?: ReviewFormValues;
  isLoading?: boolean;
  onSave: (form: ReviewFormValues) => void;
  onCancel?: () => void;
};

export const ReviewForm: FC<ReviewFormProps> = ({
  initialValue = FORM_INITIAL_VALUES,
  isLoading,
  onSave,
  onCancel,
}) => {
  const [form, dispatch] = useReducer(reducer, initialValue);

  const handleSave = () => {
    onSave({ ...initialValue, ...form });
    dispatch({ type: "reset", payload: "" });
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <form onSubmit={handleSave}>
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

      {onCancel && (
        <Button type="button" onClick={onCancel}>
          Отменить
        </Button>
      )}
    </form>
  );
};
