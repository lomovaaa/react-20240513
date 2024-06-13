import { useContext } from "react";
import { ThemeContext, Themes } from "../contexts/theme/context";

export const useTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () =>
    setTheme?.(theme === Themes.Light ? Themes.Dark : Themes.Light);

  return { theme, toggleTheme };
};
