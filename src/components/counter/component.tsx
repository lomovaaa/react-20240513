import { FC } from "react";
import { Button } from "../button/component";

type CounterProps = {
  value: number;
  min?: number;
  max?: number;
  increment: () => void;
  decrement: () => void;
};

export const Counter: FC<CounterProps> = ({
  value,
  min = 0,
  max = 5,
  increment,
  decrement,
}) => (
  <div style={{ display: "flex" }}>
    <Button type="button" disabled={value === max} onClick={increment}>
      +
    </Button>
    <p>{value}</p>
    <Button type="button" disabled={value === min} onClick={decrement}>
      -
    </Button>
  </div>
);
