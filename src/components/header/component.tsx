import { Profile } from "../profile/component";
import { ThemeToggler } from "../theme-toggler/component";

export const Header = () => (
  <header>
    <ThemeToggler />
    <Profile />
  </header>
);
