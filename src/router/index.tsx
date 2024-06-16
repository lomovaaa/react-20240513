import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components";
import { HomePage } from "../pages/home";
import { RestaurantsPage } from "../pages/restaurants";
import { RestaurantContainer } from "../components/restaurant/container";
import { MenuContainer } from "../components/menu/container";
import { ReviewsContainer } from "../components/reviews/container";
import { DishContainer } from "../components/dish/container";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/restaurants",
        element: <RestaurantsPage />,
        children: [
          {
            path: ":restaurantId",
            element: <RestaurantContainer />,
            children: [
              {
                path: "menu",
                element: <MenuContainer />,
              },
              {
                path: "reviews",
                element: <ReviewsContainer />,
              },
            ],
          },
        ],
      },
      {
        path: "/dish",
        children: [
          {
            path: ":dishId",
            element: <DishContainer />,
          },
        ],
      },
    ],
  },
]);
