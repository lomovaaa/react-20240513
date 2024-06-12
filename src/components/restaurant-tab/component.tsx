import { FC } from "react";
import { Button } from "../button/component";

type RestaurantTabProps = {
  title: string;
  onClick?: () => void;
};

export const RestaurantTab: FC<RestaurantTabProps> = ({ title, onClick }) => {
  return (
    <Button type="button" onClick={onClick}>
      {title}
    </Button>
  );
};
