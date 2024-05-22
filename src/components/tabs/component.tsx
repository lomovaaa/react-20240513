import { FC } from "react";
import { Restaurant } from "../../types";

type TabsProps = {
  restaurants: Array<Restaurant>;
  onChange?: (id: string) => void;
};

export const Tabs: FC<TabsProps> = ({ restaurants, onChange }) => (
  <div>
    {restaurants.map(({ id, name }) => (
      <button key={id} type="button" onClick={() => onChange?.(id)}>
        {name}
      </button>
    ))}
  </div>
);
