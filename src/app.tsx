import { FC } from "react";
import { restaurants } from "../materials/mock.ts";
import { Restaurant, Layout } from "./components";

export const App: FC = () => (
  <Layout>
    {restaurants.map((restaurant) => (
      <Restaurant key={restaurant.id} restaurant={restaurant} />
    ))}
  </Layout>
);
