import { FC, Reducer, useReducer } from "react";
import { ReviewRating } from "../review-rating/component";
import { Button } from "../button/component";

type FormValues = {
  name: string;
  text: string;
  rating: string;
};

type Action = { type: string; payload: string };

const FORM_INITIAL_VALUES: FormValues = {
  name: "",
  text: "",
  rating: "",
};

const reducer: Reducer<FormValues, Action> = (
  state,
  { type, payload }
): FormValues => {
  switch (type) {
    case "setName":
      return { ...state, name: payload };
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

export const CreateReviewForm: FC = () => {
  const [form, dispatch] = useReducer(reducer, FORM_INITIAL_VALUES);

  return (
    <form onSubmit={() => dispatch({ type: "reset", payload: "" })}>
      <div>
        <label>
          Имя
          <input
            value={form.name}
            onChange={(event) =>
              dispatch({ type: "setName", payload: event.target.value })
            }
          />
        </label>
      </div>
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
