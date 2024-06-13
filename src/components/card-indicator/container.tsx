import { FC, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCartCount } from "../../redux/ui/cart/selectors";
import { CartIndicator } from "./component";
import { clear } from "../../redux/ui/cart";

export const CartIndicatorContainer: FC = () => {
  const count = useSelector(selectCartCount);

  const dispatch = useDispatch();

  const handleClearCart = useCallback(() => {
    dispatch(clear());
  }, [dispatch]);

  return <CartIndicator count={count} onClear={handleClearCart} />;
};
