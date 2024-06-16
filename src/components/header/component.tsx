import { Link } from "react-router-dom";
import { useUser } from "../../hooks/use-user";
import { CartIndicatorContainer } from "../card-indicator/container";
import { Profile } from "../profile/component";
import { ThemeToggler } from "../theme-toggler/component";

export const Header = () => {
  const { user } = useUser();

  return (
    <header>
      <Link to="/">Home</Link>
      <Link to="/restaurants">Restaurants</Link>
      <ThemeToggler />
      <Profile />
      {user && <CartIndicatorContainer />}
    </header>
  );
};
