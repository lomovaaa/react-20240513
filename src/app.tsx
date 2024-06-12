import { FC } from "react";
import { Layout } from "./components";
import { Provider } from "react-redux";
import { store } from "./redux";
import { RestaurantsContainer } from "./components/restaurants/container";

export const App: FC = () => (
  <Provider store={store}>
    <Layout>
      <RestaurantsContainer />
    </Layout>
  </Provider>
);
