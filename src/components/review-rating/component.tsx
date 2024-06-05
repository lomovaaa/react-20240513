import { FC } from "react";

type ReviewRatingProps = {
  onChange?: (value: string) => void;
};

export const ReviewRating: FC<ReviewRatingProps> = ({ onChange }) => {
  return (
    <div>
      {Array.from({ length: 5 }, (_, i) => (i + 1).toString()).map(
        (evaluation) => (
          <button
            key={evaluation}
            type="button"
            onClick={() => onChange?.(evaluation)}
          >
            {evaluation}
          </button>
        )
      )}
    </div>
  );
};
