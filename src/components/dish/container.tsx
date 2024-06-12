import { FC } from "react";
import { useSelector } from "react-redux";
import { Store } from "../../types";
import { selectDishById } from "../../redux/entities/dish/selectors";
import { Dish } from "./component";

type DishContainerProps = {
  id: string;
};

export const DishContainer: FC<DishContainerProps> = ({ id }) => {
  const dish = useSelector((state: Store) => selectDishById(state, id));

  return <Dish dish={dish} />;
};
