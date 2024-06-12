import { FC } from "react";
import { Button } from "../button/component";

type CartIndicatorProps = {
  count: number;
  onClear: () => void;
};

export const CartIndicator: FC<CartIndicatorProps> = ({ count, onClear }) => {
  return (
    <div>
      <span>Cart: {count}</span>
      <Button onClick={onClear}>Clear</Button>
    </div>
  );
};
