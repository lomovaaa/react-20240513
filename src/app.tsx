import { FC } from "react";
import { Provider } from "react-redux";
import { store } from "./redux";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

export const App: FC = () => (
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
