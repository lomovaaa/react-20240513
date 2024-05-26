import { FC, useState } from "react";

const MIN = 0;
const MAX = 5;

export const Counter: FC = () => {
  const [counter, setCounter] = useState(MIN);

  const increment = () => {
    if (counter < MAX) {
      setCounter(counter + 1);
    }
  };

  const decrement = () => {
    if (counter > MIN) {
      setCounter(counter - 1);
    }
  };

  return (
    <div>
      <p>{counter}</p>
      <button type="button" onClick={increment}>
        +
      </button>
      <button type="button" onClick={decrement}>
        -
      </button>
    </div>
  );
};
