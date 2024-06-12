import { FC } from "react";
import { Restaurant } from "../../types";
import { Button } from "../button/component";

type TabsProps = {
  restaurants: Array<Restaurant>;
  onChange?: (id: string) => void;
};

export const Tabs: FC<TabsProps> = ({ restaurants, onChange }) => (
  <div>
    {restaurants.map(({ id, name }) => (
      <Button key={id} type="button" onClick={() => onChange?.(id)}>
        {name}
      </Button>
    ))}
  </div>
);
