import { createRoot } from "react-dom/client";
import { restaurants } from "../materials/mock.ts";
import { Header, Footer, RestaurantCard } from "./components";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <div>
    <Header />
    {restaurants.map((restaurant) => (
      <RestaurantCard key={restaurant.id} restaurant={restaurant} />
    ))}
    <Footer />
  </div>
);
