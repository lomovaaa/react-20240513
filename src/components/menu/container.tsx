import { FC } from "react";
import { Menu } from "./component";
import { useGetDishesByRestaurantIdQuery } from "../../redux/service/api";

type MenuContainerProps = {
  restaurantId: string;
};

export const MenuContainer: FC<MenuContainerProps> = ({ restaurantId }) => {
  const { data: dishes, isFetching } =
    useGetDishesByRestaurantIdQuery(restaurantId);

  if (isFetching) {
    return <div>Loading...</div>;
  }

  if (!dishes?.length) {
    return null;
  }

  return <Menu dishes={dishes} />;
};
