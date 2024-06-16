import { FC } from "react";
import { Tab } from "../tab/component";

export const RestaurantNavigationTabs: FC = () => <div>
    <Tab to="menu">Menu</Tab>
    <Tab to="reviews">Reviews</Tab>
</div>