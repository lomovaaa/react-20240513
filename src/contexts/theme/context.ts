import { createContext } from "react";

export enum Themes {
  Light,
  Dark,
}

type ThemeContextProps = {
  theme: Themes;
  setTheme?: (theme: Themes) => void;
};

export const ThemeContext = createContext<ThemeContextProps>({
  theme: Themes.Light,
});
