import { FC } from "react";
import { useTheme } from "../../hooks/use-theme";
import { Button } from "../button/component";

export const ThemeToggler: FC = () => {
  const { toggleTheme } = useTheme();

  return (
    <Button type="button" onClick={toggleTheme}>
      Toggle theme
    </Button>
  );
};
