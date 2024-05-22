import { FC } from "react";
import { restaurants } from "../materials/mock.ts";
import { Restaurants, Layout } from "./components";

export const App: FC = () => (
  <Layout>
    <Restaurants restaurants={restaurants} />
  </Layout>
);
