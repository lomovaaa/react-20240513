import { FC } from "react";
import { RestaurantNormalized } from "../../types";
import { Tab } from "../tab/component";
import { useSearchParams } from "react-router-dom";

type RestaurantTabsProps = {
  restaurants: Array<RestaurantNormalized>;
};

export const RestaurantTabs: FC<RestaurantTabsProps> = ({ restaurants }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchValue = searchParams.get("search") || "";

  return (
    <div>
      <input
        value={searchValue}
        onChange={(event) => setSearchParams({ search: event.target.value })}
      />
      {restaurants
        .filter(
          ({ name }) =>
            name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1
        )
        .map(({ id, name }) => (
          <Tab key={id} to={id}>
            {name}
          </Tab>
        ))}
    </div>
  );
};
